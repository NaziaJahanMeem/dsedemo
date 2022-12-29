import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class ShareholdingPattern extends Component {
    constructor(props) {
      super();
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          labels: ['Public','SponsorDirector', 'Govt', 'Institute','Foreign'],
          //colors: ['#34c0eb', '#34a2eb', '#347aeb', '#344feb', '#4034eb'],
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center'
          },
          theme: {
            monochrome: {
              enabled: true
            }
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          
          plotOptions: {
            pie: {
            donut: {
            size: '20%',
            customScale: 0.1,
            
            }}},         
        },
        series: [0.00, 27.07, 0.00, 33.04, 39.89]
      };
    }
  
    render() {
      return (
        <div className="">
            <h1 className="flex justify-center text-lg font-serif">Shareholding Pattern</h1>
            <h3 className="flex justify-center text-sm">Oct 31,2022</h3>
            <div className="flex justify-center app">
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
        </div>
        
      );
    }
  }
  
export default ShareholdingPattern;