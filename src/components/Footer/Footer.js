import { Container, Col, Row } from "react-bootstrap"
export default function Footer(props) {

    return (
       
            <Container className="crc-footer mr-0 ml-0" fluid>
            
                <h3>Site Information and Resources</h3>

                <Row className="justify-content-md-center" >

                    <Col xs="3">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/about" target="_blank">About</a></li>
                            <li><a href="/contribute" target="_blank">Ways to Participate</a></li>
                            <li><a href="https://crime-data-explorer.fr.cloud.gov/pages/docApi" target="_blank" rel="noreferrer" >FBI Crime Reporting API</a></li>
                            <li><a href="https://www.fbi.gov/services/cjis/ucr/nibrs" target="_blank" rel="noreferrer" >National Incident-Based Reporting System (NIBRS)</a></li>
                            <li><a href="https://api.data.gov/docs/fbi/" target="_blank" rel="noreferrer" >Federal Bureau of Investigation APIs</a></li>
                        </ul>

                    </Col>

                    <Col xs="3">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="https://www.fbi.gov/services/cjis/cjis-link/srs-to-nibrs-the-path-to-better-ucr-data" target="_blank" rel="noreferrer" >SRS to NIBRS</a></li>
                            <li><a href="https://www.fbi.gov/" target="_blank" rel="noreferrer" >FBI</a></li>
                            <li><a href="" target="_blank">OFCRC GitHub Repository</a></li>
                            <li><a href="https://crime-data-explorer.fr.cloud.gov/pages/home" target="_blank" rel="noreferrer" >FBI Crime Data Explorer</a></li>
                            <li><a href="https://www.fbi.gov/services/cjis/ucr/hate-crime" target="_blank" rel="noreferrer" >Hate Crime Statistics</a></li>
                        </ul>
                    </Col>
                    
                    <Col xs="3">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >OFCRC</a></li>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >OFCRC Development Team</a></li>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >Support</a></li>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >Feature Requests</a></li>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >Join Our Mailing List</a></li>
                            <li><a href="mailto:ofcrc@uswide.net" target="_blank" rel="noreferrer" >Request Updates</a></li>
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

