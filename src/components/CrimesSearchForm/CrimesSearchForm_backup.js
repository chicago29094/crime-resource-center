import { Container, Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";


export default function CrimesSearchForm(props) {

    return (
        <>
            <h2>Crimes Search Form</h2>

            <Form>

                <Form.Group as={Row} controlId="stateSearch">                    
                    <Form.Label column sm="1">State:</Form.Label>
                    <Col sm="11">
                        <Form.Control as="select">
                        <option value="">Select...</option>
                        <option value="IL">Illinois</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

    
                <Form.Group as={Col} controlId="yearRange">
                    <Row className="justify-content-md-start">
                        <Form.Label column xs="auto">Start Year:</Form.Label>
                        <Col>
                        <Form.Control as="select">
                        <option value="">Select...</option>
                        { 
                            (() => {
                                const yearsOptions=[];
                                for (let i=1990; i<=2019; i++) {
                                    yearsOptions.push(i);
                                }
                                return yearsOptions;
                            })().map( (element, index) => 
                                    <option key={index} value='{element}' ddd>{element}</option>
                                )
                        }
                        </Form.Control>
                        </Col>

                        <Form.Label column xs="auto">End Year:</Form.Label>
                        <Col>
                            <Form.Control as="select">
                            <option value="">Select...</option>
                            <option value="2021">2021</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
    
                <Form.Group controlId="crimeSearch">
                    <Form.Label>Offense Type:</Form.Label>
                    <Form.Control as="select">
                    <option value="">Select...</option>
                    <option value="Burglary">Burglary</option>
                    </Form.Control>
                </Form.Group>

                <div className="mb-3">
                    <Form.Label className="mr-3">Output Format:</Form.Label>             
                    <Form.Check
                        inline
                        label="Text"
                        name="outputFormat"
                        type="radio"
                        id={`textoutput`}
                    />
                    <Form.Check
                        inline
                        label="Chart"
                        name="outputFormat"
                        type="radio"
                        id={`chartoutput`}
                    />
                </div>


                <Button variant="primary" type="submit">
                    Search Crime Data
                </Button>

            </Form>


        </>
    )

}

