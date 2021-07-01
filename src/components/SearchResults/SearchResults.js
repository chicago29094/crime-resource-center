import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints";
import { SearchResultsText } from '../SearchResultsText/SearchResultsText'
import { SearchResultsChart } from '../SearchResultsChart/SearchResultsChart'

export default function SearchResults(props) {

    // console.log("Here:", fbiControllers['lookups'].stateAPI);
    // console.log("Here2:", fbiControllers["arrest-data"]["detailedOffense"]);
    // console.log("Here3:", generateAPIURL("IL", "burglary", "rape", "male", "1991", "2019", "abcdefghijk", fbiControllers["arrest-data"]["arrestAPI"]) );
    
    const fetchStateList = async (pstates, page, fetchAction) => {
        const apiURL = generateAPIURL("", "", "", "", "", "", apiKey, fbiControllers["lookups"]["stateAPI"], page );
        console.log("apiURL=", apiURL);
        try { 
            // fetch
            const response = await fetch(apiURL);

            if ( (!response.ok) || (response.status!==200) ) {
                const message = `An error occurred while retrieving the list of available U.S. States.  Please try again or contact the CRC administrator.`;
                throw new Error(message);
            }

            const data = await response.json();

            if ( (data) && (data.results) && (data.results.length>0) ) {
                if (fetchAction==="replace") {
                    setStates([]);
                }

                let localStates=[...pstates];
                for (let i=0; i<data.results.length; i++) {
                    const stateObj={};
                    stateObj[data.results[i].state_abbr]=data.results[i].state_name;
                    localStates.push(stateObj);
                }
                setStates( localStates );

                if ( (data.pagination) && (data.pagination.page>=0) && (data.pagination.pages>=1) ) {
                    const currentPage=parseInt(data.pagination.page);
                    const totalPages=parseInt(data.pagination.pages);

                    if (totalPages>0) {
                        if (currentPage<(totalPages-1)) {
                            fetchStateList(localStates, currentPage+1, "append");
                        }
                    }
                }
            }

        } catch(error) {
            console.log(error);
        }
    }


    useEffect( () => {
                fetchStateList(states, "", "replace");
    }, []);

    if ( (props.searchRequest) && (props.searchRequest.outputFormat==='textOutput') {
        return (
            <SearchResultsText />
        )
    }
    else if ( (props.searchRequest) && (props.searchRequest.outputFormat==='textOutput') {
        return (
            <SearchResultsChart />
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

