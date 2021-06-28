import { Form, Button } from "react-bootstrap";
export default function CrimesSearchForm(props) {
 
    return (
        <div>
            <h1>Crimes Search Form</h1>

            <Form>

                <Form.Group className="mb-3" controlId="searchState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="State...">
                        <option>State...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search Crime Data
                </Button>

            </Form>


        </div>
    )

}

