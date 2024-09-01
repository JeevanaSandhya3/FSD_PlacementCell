import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Statistics.css';

const Statistics = () =>  {
    const [state, setState] = useState({
    options: {
      //colors = ["§§§§§§§§§"],
        chart: {
          id: "basic-bar",
          width: '70%', // Adjust the width percentage as needed
          height: '50px',
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
        },
      },
      series: [
        {
          name: "Software",
          data: [30, 40, 45, 50, 49, 60, 70, 85,95]
        },
        {
          name: "Hardware",
          data: [30, 44, 45, 55, 49, 64, 75, 80,89]
        },
      ],
    });
      return(
        <div className="Statistics" id="statistics">
          <div className="container ">
            <h2 className="heading" > Statistics </h2>
            <span className='line'></span>
              <div className="row justify-content-center">
                <div className="container2">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="900px"
                    />
                </div>
            </div>
        </div>
        </div>
      );
    
}
export default Statistics