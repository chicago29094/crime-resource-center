import { useState, useEffect } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { fbiControllers, randomKey } from "../../fbiAPIEndpoints";


export default function CrimesSearchForm(props) {

   console.log("CrimesSearchForm Loading....");

    const inputFields = {
        searchType: "",
        stateSearch: '',
        startYear: '',
        endYear: '',
        crimeSearch: '',
        outputFormat: 'chartOutput',
        textOutput: "",
        chartOutput: "true",
        requestID: "",
    }

    const [formFields, setFormFields] = useState(inputFields); 

    useEffect( () => {
        setFormFields({...inputFields});
        props.setSearchRequest({...inputFields});
    },[]);

    function handleSearchChange(event) {
        console.log("target", event.target);
        console.log("name", event.target.name);
        console.log("id", event.target.id);
        console.log("value", event.target.value);

		const searchRequest = {
            searchType: formFields.searchType,
			stateSearch: formFields.stateSearch,
            startYear:  formFields.startYear,
            endYear: formFields.endYear,
            crimeSearch: formFields.crimeSearch,
            outputFormat: formFields.outputFormat,
            textOutput: formFields.textOutput,
            chartOutput: formFields.chartOutput,
            requestID: formFields.requestID
		};        
        if ( (event.target.id==="textOutput") && (event.target.value==="on") ) {
            searchRequest.outputFormat="textOutput";
            searchRequest.textOutput="checked";
            searchRequest.chartOutput="";
        }
        else if ( (event.target.id==="chartOutput") && (event.target.value==="on") )  {
            searchRequest.outputFormat="chartOutput";
            searchRequest.textOutput="";
            searchRequest.chartOutput="checked";
        }
        else {
            searchRequest[event.target.id]=event.target.value;
        }

        setFormFields({...searchRequest});

    }

    
    function handleSearchSubmit(event) {
		event.preventDefault();
        console.log("Submit", event);
		const request = {
            searchType: "Crime State",
            requestID: randomKey(16),
		};                
        props.setSearchRequest({...formFields, ...request});
        //setFormFields({...inputFields});
	}

    return (
        <div className="crime-search-form">
            <h2>Crimes Search Form</h2>

            <Form id="crimeSearchForm" onSubmit={handleSearchSubmit}>

                <Form.Group as={Row} controlId="stateSearch">                    
                    <Form.Label column sm="1">State:</Form.Label>
                    <Col sm="11">
                        <Form.Control as="select" required onChange={handleSearchChange} value={formFields.stateSearch.value} defaultValue={formFields.stateSearch.value}>
                        <option value="">Select...</option>
                        {
                            props.states.map( ( element, index) => {
                                    const state = Object.entries(element);
                                    const stateAbbr=state[0][0];
                                    const stateName=state[0][1];
                                    return <option key={index}keyid value={stateAbbr}>{stateName}</option>
                                }
                            )
                        }
                        </Form.Control>
                    </Col>
                </Form.Group>

    
                <Form.Group as={Col} controlId="startYear">
                    <Row className="justify-content-md-start">
                        <Form.Label column xs="auto" >Start Year:</Form.Label>
                        <Col>
                        <Form.Control as="select" required onChange={handleSearchChange} value={formFields.startYear.value} defaultValue={formFields.stateSearch.value}>
                        <option value="">Select...</option>
                        { 
                                (() => {
                                    const yearsOptions=[];
                                    for (let i=1990; i<=2019; i++) {
                                        yearsOptions.push(i);
                                    }
                                    return yearsOptions;
                                })().map( (year, index) => 
                                    <option key={year}keyid value={year}>{year}</option>
                                )  
                        }
                        </Form.Control>
                        </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group as={Col} controlId="endYear">
                        <Row className="justify-content-md-start">
                        <Form.Label column xs="auto">End Year:</Form.Label>
                        <Col>
                            <Form.Control as="select" required onChange={handleSearchChange}  value={formFields.endYear.value} defaultValue={formFields.stateSearch.value}>
                            <option value="" >Select...</option>
                            { 
                                (() => {
                                    const yearsOptions=[];
                                    for (let i=1990; i<=2019; i++) {
                                        yearsOptions.push(i);
                                    }
                                    return yearsOptions;
                                })().map( (year, index) => 
                                    <option key={year}keyid value={year}>{year}</option>
                                )
                        }
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
    
                <Form.Group controlId="crimeSearch">
                    <Form.Label>Major Offense Type:</Form.Label>
                    <Form.Control as="select" required onChange={handleSearchChange}  value={formFields.crimeSearch.value} defaultValue={formFields.stateSearch.value}>
                    <option value="" >Select...</option>
                    {
                        Object.entries(fbiControllers["offense-tkm"]["generalOffense"]).map(
                            (key, index) => {
                                return <option key={key[0]}offid value={key[0]}>{key[1]}</option>
                            }
                        )   
                    }
                    </Form.Control>
                </Form.Group>

                <div className="mb-3">
                    <Form.Label className="mr-3">Output Format:</Form.Label>             
                    <Form.Check
                        inline
                        label="Chart"
                        name="outputFormat"
                        type="radio"
                        id={`chartOutput`}
                        checked={formFields.chartOutput}
                        onChange={handleSearchChange} 
                        onClick={handleSearchChange} 
                    />
                    <Form.Check
                        inline
                        label="Text"
                        name="outputFormat"
                        type="radio"
                        id={`textOutput`}
                        checked={formFields.textOutput}
                        onChange={handleSearchChange}
                        onClick={handleSearchChange}
                    />
                </div>

                <Button variant="primary mr-3" type="submit" id="submitForm">
                    Search Crime Data
                </Button>

            </Form>


        </div>
    )

}

