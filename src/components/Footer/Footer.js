import { Container, Col, Row } from "react-bootstrap"
export default function Footer(props) {

    return (
       
            <Container>
                <h1>Footer</h1>
            
                <Row>
                    <Col>
                        <h3>About</h3>
                    </Col>
                    <Col>
                        <h3>Resources</h3>
                    </Col>
                    <Col>
                        <h3>Contact</h3>
                    </Col>
                </Row>
            </Container>

    )

}

