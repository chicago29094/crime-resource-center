import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

export default function MainContainer(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MainContent />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );

}

