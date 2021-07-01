import { Route } from "react-router-dom"
import { useState, useEffect } from "react"
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
    
    const [apiKey, setApiKey] = useState(process.env.REACT_APP_FBI_API_KEY);
    const [states, setStates] = useState([]);
    const [searchRequest, setSearchRequest] = useState({});     

    const fetchStateList = async (pstates, page, fetchAction) => {
        const apiURL = generateAPIURL("", "", "", "", "", "", apiKey, fbiControllers["lookups"]["stateAPI"], page );
        console.log("apiURL=", apiURL);
        try { 
            // fetch
            const response = await fetch(apiURL);

            if ( (!response.ok) || (response.status!==200) ) {
                const message = `An error occurred while retrieving the list of available U.S. States.  Please try again or contact the CRC administrator.`;
                throw new Error(message);
            }

            const data = await response.json();

            if ( (data) && (data.results) && (data.results.length>0) ) {
                if (fetchAction==="replace") {
                    setStates([]);
                }

                let localStates=[...pstates];
                for (let i=0; i<data.results.length; i++) {
                    const stateObj={};
                    stateObj[data.results[i].state_abbr]=data.results[i].state_name;
                    localStates.push(stateObj);
                }
                setStates( localStates );

                if ( (data.pagination) && (data.pagination.page>=0) && (data.pagination.pages>=1) ) {
                    const currentPage=parseInt(data.pagination.page);
                    const totalPages=parseInt(data.pagination.pages);

                    if (totalPages>0) {
                        if (currentPage<(totalPages-1)) {
                            fetchStateList(localStates, currentPage+1, "append");
                        }
                    }
                }
            }

        } catch(error) {
            console.log(error);
        }
    }


    useEffect( () => {
                fetchStateList(states, "", "replace");
    }, []);

    return (

        <main>
            <Route path="/" exact component={Hero} />
            <Route path="/about" exact component={About} />
            <Route path="/contribute" exact component={Contribute} />

            <Route path="/crimes" exact>
                <Container fluid>
                    <Row className="justify-content-between">
                        <Col xs="4" className="px-5">
                            <CrimesSearchForm apiKey={apiKey} states={states} setSearchRequest={setSearchRequest} />
                        </Col>  
                        <Col xs="8">
                            <SearchResults apiKey={apiKey} states={states} searchRequest={searchRequest}setSearchRequest={setSearchRequest} />
                        </Col>
                    </Row>
                </Container>
            </Route>
                
            <Route path="/arrests" exact>
                <Container fluid>
                    <Row>
                        <Col xs="4" className="px-5">
                            <ArrestsSearchForm  apiKey={apiKey} states={states} setSearchRequest={setSearchRequest} />
                        </Col>
                        <Col xs="8">
                            <SearchResults  apiKey={apiKey} states={states} searchRequest={searchRequest} setSearchRequest={setSearchRequest} />
                        </Col>
                    </Row>
                </Container>
            </Route>

        </main>
    )

}

