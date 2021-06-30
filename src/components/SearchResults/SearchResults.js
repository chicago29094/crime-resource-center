import { useState, useEffect } from "react";

export default function SearchResults(props) {

    console.log(props);

    return (
        <div>
            <h2>Search Results</h2>

            {
                props.states.map( (element, index) => {
                    const [key, value]=Object.entries(element);
                    console.log(key, value);
                    return (
                        <div key={index}>
                           <p>{key[0]},  {key[1]}</p>
                        </div>
                    )
                } )
            }

        </div>
    )

}

