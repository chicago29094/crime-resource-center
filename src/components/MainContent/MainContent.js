import { Route } from "react-router-dom"
import { Container, Col, Row } from "react-bootstrap"
import About from "../About/About"
import Contribute from "../Contribute/Contribute"
import Hero from "../Hero/Hero"
import ArrestsSearchForm from "../ArrestsSearchForm/ArrestsSearchForm"
import CrimesSearchForm from "../CrimesSearchForm/CrimesSearchForm"
import SearchResults from "../SearchResults/SearchResults"
import { fbiControllers }  from "../../fbiAPIEndpoints"

export default function MainContent(props) {

    console.log("Here:", fbiControllers['lookups'].stateAPI);
    console.log("Here2:", fbiControllers["arrest-data"]["Offense List"]);

    return (
        <main>
            <Route path="/" exact component={Hero} />
            <Route path="/about" exact component={About} />
            <Route path="/contribute" exact component={Contribute} />

            <Route path="/crimes" exact>
                <Container fluid>
                    <Row className="justify-content-between">
                        <Col xs="4" className="px-5">
                            <CrimesSearchForm />
                        </Col>  
                        <Col xs="8">
                            <SearchResults />
                        </Col>
                    </Row>
                </Container>
            </Route>
                
            <Route path="/arrests" exact>
                <Container fluid>
                    <Row>
                        <Col xs="4" className="px-5">
                            <ArrestsSearchForm />
                        </Col>
                        <Col xs="8">
                            <SearchResults />
                        </Col>
                    </Row>
                </Container>
            </Route>

        </main>
    )

}

