import { useState, useEffect } from "react";
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints";
import SearchResultsText  from '../SearchResultsText/SearchResultsText';
import SearchResultsChart from '../SearchResultsChart/SearchResultsChart';

export default function SearchResults(props) {

    const [crimeData, setCrimeData] = useState([]);
    const [errorState, setErrorState] = useState({state: false, title: '', message: '',});
    
    // Search Request object properties that may or may not be set
    let stateAbbr="";
    let detailedOffense="";
    let generalOffense="";
    let offenderClass="all";
    let since="";
    let until="";
    let states={};

    // Check to see if properties exist before trying to assign them, to prevent errors.
    if (props.searchRequest.stateSearch) stateAbbr = props.searchRequest.stateSearch;
    if (props.searchRequest.detailedOffense) detailedOffense = props.searchRequest.detailedOffense;

    if (props.searchRequest.generalOffense)  generalOffense = props.searchRequest.generalOffense;
    if (props.searchRequest.crimeSearch)  generalOffense = props.searchRequest.crimeSearch;

    if (props.searchRequest.offenderClass)  offenderClass = props.searchRequest.offenderClass;
    if (props.searchRequest.startYear) since = props.searchRequest.startYear;
    if (props.searchRequest.endYear) until = props.searchRequest.endYear;

    if (props.states) states=props.states;

    const fetchCrimeData = async (currentCrimeData, page, fetchAction) => {
        let useFBIControllerAPI="";
        if (props.searchRequest.searchType==="Crime State") {
            useFBIControllerAPI=fbiControllers["summarized-tkm"]["stateAPI"];
        }
        else if (props.searchRequest.searchType==="Arrests State") {
            useFBIControllerAPI=fbiControllers["arrest-data"]["offenseAPI"];
        }        
        else {
            useFBIControllerAPI=fbiControllers["summarized-tkm"]["stateAPI"];     
        }
        const apiURL = generateAPIURL(stateAbbr, detailedOffense, generalOffense, offenderClass, since, until, props.apiKey, useFBIControllerAPI, page );

        if ( (apiURL.indexOf('{')!==-1) || (apiURL.indexOf('}')!==-1) ) {
            return;
        }

        try { 
            // fetch
            const response = await fetch(apiURL);

            if ( (!response.ok) || (response.status!==200) ) {
                const message = `An error occurred while retrieving the requested FBI Crime and Arrest statistics.  Please try again or contact the CRC administrator for further assistance.`;
                throw new Error(message);
            }

            const stats = await response.json();

            if ( (stats) && 
                 ( ( (stats.data) && (stats.data.length>0) ) || 
                   ( (stats.results) && (stats.results.length>0) ) ) ) {

                    if (fetchAction==="replace") {
                        setCrimeData([]);
                    }

                let localCrimeData=[...currentCrimeData];

                if (stats.data) {
                    for (let i=0; i<stats.data.length; i++) {
                        const crimeObj=stats.data[i];
                        localCrimeData.push(crimeObj);
                    }
                }
                else if (stats.results) {
                    for (let i=0; i<stats.results.length; i++) {
                        const crimeObj=stats.results[i];
                        localCrimeData.push(crimeObj);
                    }
                }

                // Sort the Records by Year
                if (props.searchRequest.searchType==="Crime State") {
                    localCrimeData.sort( (recA, recB) => {
                        if (recA['year']<recB['year']) return -1;
                        else if (recA['year']===recB['year']) return 0;
                        else return 1;
                    } )
                    // Cleanup inconsistent reporting of rape statistics
                    for (let i=0; i<localCrimeData.length; i++) {
                        if (localCrimeData[i].rape===undefined) {
                            if (localCrimeData[i]['rape_legacy']) localCrimeData[i].rape=localCrimeData[i]['rape_legacy'];
                            if ( (localCrimeData[i]['rape_revised']) && (localCrimeData[i]['rape_revised']!==null) ) localCrimeData[i].rape=localCrimeData[i]['rape_revised'];
                        }
                    }
                }

                // Sort the Records by Year
                if (props.searchRequest.searchType==="Arrests State") {
                    localCrimeData.sort( (recA, recB) => {
                        if (recA['data_year']<recB['data_year']) return -1;
                        else if (recA['data_year']===recB['data_year']) return 0;
                        else return 1;
                    } )
                }

                setCrimeData( localCrimeData );

                if ( (stats.pagination) && (stats.pagination.page>=0) && (stats.pagination.pages>=1) ) {
                    const currentPage=parseInt(stats.pagination.page);
                    const totalPages=parseInt(stats.pagination.pages);

                    if (totalPages>0) {
                        if (currentPage<(totalPages-1)) {
                            fetchCrimeData(localCrimeData, currentPage+1, "append");
                        }
                    }
                }
            }
 
        } catch(error) {
            const errorObj = {
                state: true,
                title: 'Search Error',
                message: error,
            }
            setErrorState(errorObj);
        }
    }

    
    useEffect( () => {
                fetchCrimeData([], "", "replace");
    }, [props.searchRequest]);

    if ( (props.searchRequest) && (props.searchRequest.outputFormat==='textOutput') ) {
        return (
            <SearchResultsText apiKey={props.apiKey} states={states} searchRequest={props.searchRequest} crimeData={crimeData} errorState={errorState} />
        )
    }
    else if ( (props.searchRequest) && (props.searchRequest.outputFormat==='chartOutput') ) {
        return (
            <SearchResultsChart apiKey={props.apiKey} states={states}  searchRequest={props.searchRequest} crimeData={crimeData} errorState={errorState}  />
        )
    }
    else 
    {
        return (
            <div>
                <h2>Search Results</h2>
                <p>Please click on the <em>Crime</em> or <em>Arrests</em> navigation button and use the corresponding search form to initiate a search of the FBI''s UCR, SRS, and NIBRS annual crime and arrest data.</p>
            </div>
        )
    }

}

