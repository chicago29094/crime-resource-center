import {Container, Row, Col} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation'
import {Image} from 'react-bootstrap'
import crcLogo from "../../assets/images/CRC_Logo_Large_New5.jpg"

export default function Header(props) {
    
    return (
        <Container>
            <Row>
                <Image src={crcLogo} alt="OFCRC Logo" className="header-logo" />
                <h1>Online Federal Crime Resource Center</h1>
                <Navigation />
            </Row>
        </Container>
    )

}

