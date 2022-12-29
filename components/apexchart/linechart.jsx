import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class LineChart extends Component {


  //===========================
  constructor(props) {
    super();

    this.state = {
      series: [{
        data: [{}]
      }],
      options: {
        chart: {
          id: "candlestick"
        },
        xaxis: {
          type: 'datetime',
          categories:[]
        },
        // stroke: {
        //   curve: 'smooth',
        // }
      },
    };

  }
  // ==========================================================

  componentDidMount() {
   
   let res = 10;
    let endpoint = "http://localhost:3000/api";
    fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        
        this.setState({ series: [{ data: data }] });
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error);
      });
     //console.log(this.state);  /////dosen't get the updated value.
     //console.log("res....", res);
  }
  // =============================================================
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;