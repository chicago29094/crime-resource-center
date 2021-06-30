import { Route } from "react-router-dom"
import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import About from "../About/About"
import Contribute from "../Contribute/Contribute"
import Hero from "../Hero/Hero"
import ArrestsSearchForm from "../ArrestsSearchForm/ArrestsSearchForm"
import CrimesSearchForm from "../CrimesSearchForm/CrimesSearchForm"
import SearchResults from "../SearchResults/SearchResults"
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints"

export default function MainContent(props) {

    // console.log("Here:", fbiControllers['lookups'].stateAPI);
    // console.log("Here2:", fbiControllers["arrest-data"]["detailedOffense"]);
    // console.log("Here3:", generateAPIURL("IL", "burglary", "rape", "male", "1991", "2019", "abcdefghijk", fbiControllers["arrest-data"]["arrestAPI"]) );
    
    console.log("Main Content is Reloading", Date.now(), `props.states=[${props.states}]` );

    const fetchStateList = async (page, fetchAction) => {
        console.log(`page=[${page}], fetchAction=[${fetchAction}]`);
        const apiURL = generateAPIURL("", "", "", "", "", "", props.apiKey, fbiControllers["lookups"]["stateAPI"], page );
        console.log("apiURL=", apiURL);
        try { 
            // fetch
            const response = await fetch(apiURL);

            if ( (!response.ok) || (response.status!==200) ) {
                const message = `An error occurred while retrieving the list of available U.S. States.  Please try again or contact the CRC administrator.`;
                throw new Error(message);
            }

            const data = await response.json();

            console.log("Here:0007", data, data.results, data.results.length);
            if ( (data) && (data.results) && (data.results.length>0) ) {
                console.log("Here:00008");
                if (fetchAction==="replace") {
                    console.log("Here:00008.5");
                    props.setStates([]);
                }

                console.log("Here:00009");
                let localStates=[...props.states];
                console.log("Here:00009.1", localStates);
                for (let i=0; i<data.results.length; i++) {
                    console.log("Here:00009.5");
                    const stateObj={};
                    stateObj[data.results[i].state_abbr]=data.results[i].state_name;
                    localStates.push(stateObj);
                }
                console.log("Here:00009.6", localStates);
                console.log("Here:00009.65", [...localStates]);
                props.setStates( [...localStates] );
                console.log("Here:00009.7", props.states);

                console.log("Here:00010");
                console.log(data.pagination, data.pagination.page, data.pagination.pages);

                if ( (data.pagination) && (data.pagination.page>=0) && (data.pagination.pages>=1) ) {
                    console.log("Here:00011");
                    const currentPage=parseInt(data.pagination.page);
                    const totalPages=parseInt(data.pagination.pages);
                    console.log(`Here:00012: currentPage=[${currentPage}] totalPages=[${totalPages}]`);

                    if (totalPages>0) {
                        console.log("Here:00013");
                        if (currentPage<(totalPages-1)) {
                            console.log("Here:00013.5");
                            fetchStateList(currentPage+1, "append");
                        }
                    }
                }
            }

        } catch(error) {
            console.log(error);
        }
    }


    useEffect( () => {
                console.log("Bang!!!!");
                fetchStateList("", "replace");
    }, []);


    console.log("States Now:", props.states);

    return (

        <main>
            <Route path="/" exact component={Hero} />
            <Route path="/about" exact component={About} />
            <Route path="/contribute" exact component={Contribute} />

            <Route path="/crimes" exact>
                <Container fluid>
                    <Row className="justify-content-between">
                        <Col xs="4" className="px-5">
                            <CrimesSearchForm  apiKey={props.apiKey} states={props.states} />
                        </Col>  
                        <Col xs="8">
                            <SearchResults apiKey={props.apiKey} states={props.states} />
                        </Col>
                    </Row>
                </Container>
            </Route>
                
            <Route path="/arrests" exact>
                <Container fluid>
                    <Row>
                        <Col xs="4" className="px-5">
                            <ArrestsSearchForm  apiKey={props.apiKey} states={props.states} />
                        </Col>
                        <Col xs="8">
                            <SearchResults  apiKey={props.apiKey} states={props.states} />
                        </Col>
                    </Row>
                </Container>
            </Route>

        </main>
    )

}

