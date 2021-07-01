
export const fbiControllers = {
    "lookups": {
                    "stateAPI": 'https://api.usa.gov/crime/fbi/sapi/api/states?api_key={apiKey}',
                },
    "summarized-tkm": {
                    "stateAPI": 'https://api.usa.gov/crime/fbi/sapi/api/summarized/estimates/states/{stateAbbr}/{since}/{until}?api_key={apiKey}'
                },
    "arrest-data": {
                    "arrestAPI": 'https://api.usa.gov/crime/fbi/sapi/api/data/arrest/states/{stateAbbr}/{detailedOffense}/{offenderClass}/{since}/{until}?api_key={apiKey}',
                    "offenseAPI": 'https://api.usa.gov/crime/fbi/sapi/api/data/arrest/states/offense/{stateAbbr}/{offenderClass}/{since}/{until}?api_key={apiKey}',                    
                    "detailedOffense": {
                        "aggravated-assault":  "Aggravated Assault",
                        "all-other-offenses": "All Other Offenses",
                        "arson": "Arson",
                        "burglary": "Burglary",
                        "curfew": "Curfew",
                        "disorderly-conduct": "Disorderly Conduct",
                        "dui": "DUI",
                        "drug-grand-total": "Drug Grand Total",
                        "drug-possession-marijuana": "Drug Possession Marijuana",
                        "drug-possession-opium": "Drug Possession Opium",
                        "drug-possession-other": "Drug Possession Other",
                        "drug-possession-subtotal": "Drug Possession Subtotal",
                        "drug-possession-synthetic": "Drug Possession Synthetic",
                        "drug-sales-marijuana": "Drug Sales Marijuana",
                        "drug-sales-opium": "Drug Sales Opium",
                        "drug-sales-other": "Drug Sales Other",
                        "drug-sales-subtotal": "Drug Sales Subtotal",
                        "drug-sales-synthetic": "Drug Sales Synthetic",
                        "drunkenness": "Drunkenness",
                        "embezzlement": "Embezzlement",
                        "forgery": "Forgery",
                        "fraud": "Fraud",
                        "gambling-all-other": "Gambling All Other",
                        "gambling-bookmaking": "Gambling Bookmaking",
                        "gambling-numbers": "gambling-numbers",
                        "gambling-total": "Gambling Total",
                        "human-trafficking-commercial": "Human Trafficking Commercial",
                        "human-trafficking-servitude": "Human Trafficking Servitude",
                        "larceny": "Larceny",
                        "liquor-laws": "Liquor Laws",
                        "motor-vehicle-theft": "Motor-Vehicle Theft",
                        "murder": "Murder",
                        "offense-against-family": "Offense Against Family",
                        "prostitution": "Prostitution",
                        "prostitution-assisting": "Prostitution Assisting",
                        "prostitution-prostitution": "Prostitution Prostitution",
                        "prostitution-purchasing": "Prostitution Purchasing",
                        "rape": "Rape",
                        "robbery": "Robbery",
                        "runaway": "Runaway",
                        "sex-offenses": "Sex Offenses",
                        "simple-assault": "Simple Assault",
                        "stolen-property": "Stolen Property",
                        "suspicion": "Suspicion",
                        "vagrancy": "Vagrancy",
                        "vandalism": "Vandalism",
                        "weapons": "Weapons",
                    },
                    "offenderClass": {
                        "male": "Male",
                        "female": "Female",
                        "offense": "Offense",
                        "race": "Race",
                        "monthly": "Monthly",
                    },
                },
    "arrest-tkm": {
                    "arrestStateAPI": 'https://api.usa.gov/crime/fbi/sapi/api/arrest/states/{stateAbbr}/{detailedOffense}/{offenderClass}/{since}/{until}?api_key={apiKey}',
                    "arrestStateOffenseAPI": 'https://api.usa.gov/crime/fbi/sapi/api/arrest/states/offense/{stateAbbr}/{offenderClass}/{since}/{until}?api_key={apiKey}',
                    "detailedOffense": {
                        "aggravated-assault":  "Aggravated Assault",
                        "all-other-offenses": "All Other Offenses",
                        "arson": "Arson",
                        "burglary": "Burglary",
                        "curfew": "Curfew",
                        "disorderly-conduct": "Disorderly Conduct",
                        "dui": "DUI",
                        "drug-grand-total": "Drug Grand Total",
                        "drug-possession-marijuana": "Drug Possession Marijuana",
                        "drug-possession-opium": "Drug Possession Opium",
                        "drug-possession-other": "Drug Possession Other",
                        "drug-possession-subtotal": "Drug Possession Subtotal",
                        "drug-possession-synthetic": "Drug Possession Synthetic",
                        "drug-sales-marijuana": "Drug Sales Marijuana",
                        "drug-sales-opium": "Drug Sales Opium",
                        "drug-sales-other": "Drug Sales Other",
                        "drug-sales-subtotal": "Drug Sales Subtotal",
                        "drug-sales-synthetic": "Drug Sales Synthetic",
                        "drunkenness": "Drunkenness",
                        "embezzlement": "Embezzlement",
                        "forgery": "Forgery",
                        "fraud": "Fraud",
                        "gambling-all-other": "Gambling All Other",
                        "gambling-bookmaking": "Gambling Bookmaking",
                        "gambling-numbers": "gambling-numbers",
                        "gambling-total": "Gambling Total",
                        "human-trafficking-commercial": "Human Trafficking Commercial",
                        "human-trafficking-servitude": "Human Trafficking Servitude",
                        "larceny": "Larceny",
                        "liquor-laws": "Liquor Laws",
                        "motor-vehicle-theft": "Motor-Vehicle Theft",
                        "murder": "Murder",
                        "offense-against-family": "Offense Against Family",
                        "prostitution": "Prostitution",
                        "prostitution-assisting": "Prostitution Assisting",
                        "prostitution-prostitution": "Prostitution Prostitution",
                        "prostitution-purchasing": "Prostitution Purchasing",
                        "rape": "Rape",
                        "robbery": "Robbery",
                        "runaway": "Runaway",
                        "sex-offenses": "Sex Offenses",
                        "simple-assault": "Simple Assault",
                        "stolen-property": "Stolen Property",
                        "suspicion": "Suspicion",
                        "vagrancy": "Vagrancy",
                        "vandalism": "Vandalism",
                        "weapons": "Weapons",
                    },
                    "offenderClass": {
                        "male": "Male",
                        "female": "Female",
                        "offense": "Offense",
                        "race": "Race",
                        "monthly": "Monthly",
                    },
                },
    "offense-tkm": {
                    "offenseAPI": 'https://api.usa.gov/crime/fbi/sapi/api/nibrs/{generalOffense}/offense/states/{stateAbbr}/count?api_key={apiKey}',     
                    "generalOffense": {
                        "aggravated-assault" : "Aggravated Assault",
                        "burglary": "Burglary",
                        "larceny": "Larceny",
                        "motor-vehicle-theft": "Motor-Vehicle Theft",
                        "homicide": "Homicide",
                        "rape": "Rape",
                        "robbery": "Robbery",
                        "arson": "Arson",
                        "violent-crime": "Violent Crime",
                        "property-crime": "Property Crime",   
                    },
                },
}

export function generateAPIURL(stateAbbr, detailedOffense, generalOffense, offenderClass, since, until, apiKey, apiURL, page) {

if ( (!apiURL) || (apiURL.length===0) ) {
    return "";
}

let newURL=apiURL;

if ( (stateAbbr) && (stateAbbr.length>0) ) {
    newURL=newURL.replace('{stateAbbr}', stateAbbr);
}

if ( (detailedOffense) && (detailedOffense.length>0) ) {
    newURL=newURL.replace('{detailedOffense}', detailedOffense);
}

if ( (generalOffense) && (generalOffense.length>0) ) {
    newURL=newURL.replace('{generalOffense}', generalOffense);
}

if ( (offenderClass) && (offenderClass.length>0) ) {
    newURL=newURL.replace('{offenderClass}', offenderClass);
}

if ( (since) && (since.length>0) ) {
    newURL=newURL.replace('{since}', since);
}

if ( (until) && (until.length>0) ) {
    newURL=newURL.replace('{until}', until);
}

if ( (apiKey) && (apiKey.length>0) ) {
    newURL=newURL.replace('{apiKey}', apiKey);
}

if ( (page) && (Number.isInteger(page)) ) {
    newURL=newURL+`&page=${page}`;
}

return newURL;

}

export function randomKey(length) {
    let str="";
    for (let i=0; i<length; i++) {
        str = str + String.fromCharCode( (Math.round(Math.random()*9+48)), (Math.round(Math.random()*25+65)), (Math.round(Math.random()*25+97)) );
    }
    return str.split('').sort( () => {
            return [1, 0, -1][Math.round(Math.random()*2)];
        }).join('').slice(0, length);
}

