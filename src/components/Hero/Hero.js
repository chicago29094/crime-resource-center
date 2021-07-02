import { Container, Row, Col, Button } from "react-bootstrap";
import CRCImage from '../../assets/images/crc-robots-2020.jpg';
export default function Hero(props) {

    return (
        <Container>
            <Col className="hero-container">

            <div style={{ 
                  backgroundImage: `url(${CRCImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize:'cover',
            }}>
            <p>Welcome to the Online Federal Crime Resource Center.  We are currently providing crime and arrests statistics from 1990 through 2019.</p>
      
            <Button variant="primary" href='/crimes' id="hero-button" size='lg'>Click to Get Started</Button>

            </div>

            </Col>
        </Container>
    )

}

