import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints";
import { Bar } from 'react-chartjs-2';



export default function SearchResultsChart(props) {

  const chartData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  
  const chartOptions = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
        font: {
          size: 18
        },
      }
      },
      title: {
        display: true,
        text: '',
        font: {
            size: 24
        },
      },
    },
  };

    console.log('SearchResultsChart Rendering', Date.now());

    if ( (!props.searchRequest) || (!props.crimeData) ) {
      return (
          <div>
              <h2>Search Results</h2>
              <p>Please use the search form to view crime and arrest statistics.</p>
          </div>
      )
    }

    const searchRequest = props.searchRequest;
    const crimeData = props.crimeData;

    // Search Request object properties that may or may not be set
    let stateAbbr="";
    let stateFormatted="";
    let detailedOffense="";
    let detailedOffenseUnderscore="";
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
        detailedOffenseUnderscore = detailedOffense.replaceAll('-','_');        
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

      // Prepare chart data and options
      for (let index=0; index<crimeData.length; index++) {

        chartData.datasets[0].data.push( (crimeData[index][generalOffenseUnderscore]!==null) ? 
        crimeData[index][generalOffenseUnderscore] : 0);
        chartData.labels.push(crimeData[index].year);

        let randomRed=(Math.round(Math.random()*200)+25);
        let randomRedBorder=randomRed-25;
        let randomBlue=(Math.round(Math.random()*200)+25);
        let randomBlueBorder=randomBlue-25;
        let randomGreen=(Math.round(Math.random()*200)+25);
        let randomGreenBorder=randomGreen-25;

        let randomBarColor=`rgba(${randomRed}, ${randomBlue}, ${randomGreen}, 0.8)`;
        let randomBarColorBorder=`rgba(${randomRedBorder}, ${randomBlueBorder}, ${randomGreenBorder}, 0.8)`;

        chartData.datasets[0].backgroundColor.push(randomBarColor);
        chartData.datasets[0].borderColor.push(randomBarColorBorder);
      }
      chartData.datasets[0].label="# of Offenses";
      chartOptions.plugins.title.text=`Offense: ${generalOffenseFormatted}  Years: ${since} to ${until} `;

      return (
        <div className='crime-chart'>
          <h4>Crime Statistics for {stateFormatted}</h4>
          <h5>Offense: {generalOffenseFormatted}  Years: {since} to {until} </h5>

          <div className='header'>
              
          <h1 className='title'>Crime Statistics for {stateFormatted}</h1>
        </div>

        <Bar data={chartData} options={chartOptions} />

      </div>
      )
  }
  else if (searchRequest.searchType==="Arrests State") {

    // Prepare chart data and options
    for (let index=0; index<crimeData.length; index++) {

      chartData.datasets[0].data.push( (crimeData[index][detailedOffenseUnderscore]!==null) ? 
      crimeData[index][detailedOffenseUnderscore] : 0);
      chartData.labels.push(crimeData[index].data_year);

      let randomRed=(Math.round(Math.random()*200)+25);
      let randomRedBorder=randomRed-25;
      let randomBlue=(Math.round(Math.random()*200)+25);
      let randomBlueBorder=randomBlue-25;
      let randomGreen=(Math.round(Math.random()*200)+25);
      let randomGreenBorder=randomGreen-25;

      let randomBarColor=`rgba(${randomRed}, ${randomBlue}, ${randomGreen}, 0.8)`;
      let randomBarColorBorder=`rgba(${randomRedBorder}, ${randomBlueBorder}, ${randomGreenBorder}, 0.8)`;

      chartData.datasets[0].backgroundColor.push(randomBarColor);
      chartData.datasets[0].borderColor.push(randomBarColorBorder);
    }
    chartData.datasets[0].label="# of Offenses";
    chartOptions.plugins.title.text=`Offense: ${detailedOffenseFormatted}  Years: ${since} to ${until} `;

    return (
      <div className='crime-chart'>
        <h4>Arrest Statistics for {stateFormatted}</h4>
        <h5>Offense: {detailedOffenseFormatted}  Years: {since} to {until} </h5>

        <div className='header'>
            
        <h1 className='title'>Arrest Statistics for {stateFormatted}</h1>
      </div>

      <Bar data={chartData} options={chartOptions} />

    </div>
    )
}
  else {

    return (
          <div className='crime-chart'>
              <h2>Search Results</h2>
              <p>Please use the search form to view crime and arrest statistics.</p>
          </div>
      )        

    }

 }

