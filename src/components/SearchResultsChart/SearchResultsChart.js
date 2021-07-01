import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { fbiControllers, generateAPIURL }  from "../../fbiAPIEndpoints";
import { Bar } from 'react-chartjs-2';


const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 100, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'x',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

export default function SearchResultsChart(props) {

    console.log('SearchResultsChart Rendering', Date.now());

    return (
        <div>
            <h4>Chart Data</h4>

            <div className='header'>
                
            <h1 className='title'>Horizontal Bar Chart</h1>
            <div className='links'>
                <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/HorizontalBar.js'
                >
                Github Source
                </a>
            </div>
            </div>
            <Bar data={data} options={options} />

        </div>
    )

}

