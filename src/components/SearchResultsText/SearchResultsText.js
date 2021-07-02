import { useState, useEffect } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints";

export default function SearchResultsText(props) {

    console.log('SearchResultsText Rendering', Date.now());
    

    if ( (!props.searchRequest) || (!props.crimeData) ) {
        return (
            <div>
                <p>Please use the search form to view statistics.</p>
            </div>
        )
    }

    const searchRequest = props.searchRequest;
    const crimeData = props.crimeData;

    // Search Request object properties that may or may not be set
    let stateAbbr="";
    let stateFormatted="";
    let detailedOffense="";
    let detailedOffenseFormatted="";
    let generalOffense="";
    let generalOffenseUnderscore="";
    let generalOffenseFormatted="";
    let offenderClass="";
    let offenderClassFormatted="";
    let since="";
    let until="";

    let states={};

    // Check to see if properties exist before trying to assign them, to prevent errors.

    if (props.states) states=props.states;

    if (searchRequest.stateSearch) {
        stateAbbr = searchRequest.stateSearch;
        for (let i=0; i<props.states.length; i++) {
            if (props.states[i][stateAbbr]) stateFormatted = props.states[i][stateAbbr];
        }
    }
    if (searchRequest.detailedOffense) {
        detailedOffense = searchRequest.detailedOffense;
        detailedOffenseFormatted = fbiControllers["arrest-tkm"]["detailedOffense"][detailedOffense];
    }
    if (searchRequest.generalOffense)  {
        generalOffense = searchRequest.generalOffense;
        generalOffenseUnderscore = generalOffense.replaceAll('-','_');
        generalOffenseFormatted = fbiControllers["offense-tkm"]["generalOffense"][generalOffense];
    }
    if (searchRequest.crimeSearch)  {
        generalOffense = searchRequest.crimeSearch;
        generalOffenseUnderscore = generalOffense.replaceAll('-','_');
        generalOffenseFormatted = fbiControllers["offense-tkm"]["generalOffense"][generalOffense];
    }
    if (searchRequest.offenderClass)  {
        offenderClass = searchRequest.offenderClass;
        offenderClassFormatted = fbiControllers["arrest-tkm"]["offenderClass"][offenderClass];
    }
    if (searchRequest.startYear) {
        since = searchRequest.startYear;
    }
    if (searchRequest.endYear) {
        until = searchRequest.endYear;
    }

    if (searchRequest.searchType==="Crime State") {

        return (
            <div className="crime-text">
                <h4>Crime Statistics for {stateFormatted}</h4>
                <h5>Offense: {generalOffenseFormatted}  Years: {since} to {until} </h5>
            
            { 
                (() => {
                console.log(crimeData)
                console.log(generalOffense)
                console.log(generalOffenseUnderscore)
                console.log(crimeData[2])
                })()
            } 

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th colSpan="2">Crime Statistics for {stateFormatted}</th>                        
                    </tr>
                    <tr>
                        <th>Year</th>
                        <th>{generalOffenseFormatted} - Annual Total</th>
                    </tr>
                    {crimeData.map( (element, index) => { return (
                        <tr key={index}>
                            <td>{crimeData[index].year}</td>
                            <td>{ ( (crimeData[index][generalOffenseUnderscore]!==undefined) && 
                                     (crimeData[index][generalOffenseUnderscore]!==null) ) ?  
                            parseInt(crimeData[index][generalOffenseUnderscore]).toLocaleString('en-US', 0) : 'Unavailable' }</td>
                        </tr>
                    ) } ) }
                </thead>
            </Table>

            </div>
        )

    }
    else {
        return (
            <div className="crime-text">
                <p>Please use the search form to view statistics.</p>
            </div>
        )        
    }

}

