import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

export default function MainContainer(props) {

const [apiKey, setApiKey] = useState(process.env.REACT_APP_FBI_API_KEY);
const [states, setStates] = useState([]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MainContent apiKey={apiKey} states={states} setStates={setStates} />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );

}

