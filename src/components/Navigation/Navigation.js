
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Navigation(props) {

    return (
    
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/crimes">Crimes</Nav.Link>
                    <Nav.Link href="/arrests">Arrests</Nav.Link>
                    <Nav.Link href="/contribute">Contribute</Nav.Link>
                    <Nav.Link href="https://www.fbi.gov/" target="_blank">FBI.gov</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

