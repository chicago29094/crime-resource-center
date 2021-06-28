import { Container, Col, Row } from "react-bootstrap"
export default function Footer(props) {

    return (
       
            <Container className="crc-footer mr-0 ml-0" fluid>
            
                <h3>Footer</h3>

                <Row className="justify-content-md-center">

                    <Col xs="3">
                        <h4>About</h4>
                        <ul>
                            <li>Pellentesque porttitor</li>
                            <li>Velit lacinia egestas auctor</li>
                            <li>Diam eros tempus arcu</li>
                            <li>Nec vulputate augue</li>
                        </ul>

                    </Col>

                    <Col xs="3">
                        <h4>Resources</h4>
                        <ul>
                            <li>Pellentesque porttitor</li>
                            <li>Velit lacinia egestas auctor</li>
                            <li>Diam eros tempus arcu</li>
                            <li>Nec vulputate augue</li>
                        </ul>
                    </Col>
                    
                    <Col xs="3">
                        <h4>Contact</h4>
                        <ul>
                            <li>Pellentesque porttitor</li>
                            <li>Velit lacinia egestas auctor</li>
                            <li>Diam eros tempus arcu</li>
                            <li>Nec vulputate augue</li>
                        </ul>
                    </Col>

                </Row>
            </Container>

    )

}

