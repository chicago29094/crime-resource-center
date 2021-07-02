import { Container, Col, Row } from "react-bootstrap"
export default function Footer(props) {

    return (
       
            <Container className="crc-footer mr-0 ml-0" fluid>
            
                <h3>Site Information and Resources</h3>

                <Row className="justify-content-md-center">

                    <Col xs="3">
                        <h4>About</h4>
                        <ul>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                        </ul>

                    </Col>

                    <Col xs="3">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="https://www.fbi.gov/services/cjis/cjis-link/srs-to-nibrs-the-path-to-better-ucr-data" target="_blank">SRS to NIBRS</a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                        </ul>
                    </Col>
                    
                    <Col xs="3">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                        </ul>
                    </Col>

                </Row>

                <Row className="justify-content-md-center">
                    <Col className='copyright'>&copy; 2021, Online Federal Crime Resource Center, Harry Anastopoulos, All Rights Reserved
                    </Col>
                </Row>

            </Container>

    )

}

