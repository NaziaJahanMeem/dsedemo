import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class Donut extends Component {
    constructor(props) {
      super();
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        },
        series: [44, 55, 41, 17, 15]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width="500"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
export default Donut;