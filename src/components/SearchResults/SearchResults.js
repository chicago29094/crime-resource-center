import { useState, useEffect } from "react";

export default function SearchResults(props) {

    console.log(props);

    const crimeURL = `https://api.usa.gov/crime/fbi/sapi/nibrs/burglary/offense/states/IL/?api_key=AifSwsIlzJwvxVYt2vhfAmQI3vNE0H74MhPyVYeh`
    

    const getApiData = async () => {
        const apiEndPoint = {crimeURL};
        try { 
            // fetch
            const res = await fetch(apiEndPoint);
            const data = await res.json();
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        getApiData();
    }, []);

    return (
        <div>
            <h2>Search Results</h2>
        </div>
    )

}

