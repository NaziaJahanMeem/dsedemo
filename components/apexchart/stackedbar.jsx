import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class StackedBarChart extends Component {
    constructor(props) {
      super();
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar",
            stacked: true,
            // zoom: {
            //     enabled: true
            //   }
          },
          plotOptions: {
            bar: {
            //   horizontal: true,
              dataLabels: {
                total: {
                //   enabled: true,
                  offsetX: 0,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Fiction Books Sales'
          },
          xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            // labels: {
            //   formatter: function (val) {
            //     return val + "K"
            //   }
            // }
            // tickPlacement: 'on'          //....for zoom
          },
          yaxis: {
            title: {
              text: undefined
            },
            labels: {
                formatter: function (val) {
                  return val + "K"
                }
              },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
        series: [
            {
            // name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
          }, {
            // name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
          }, {
            // name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
          }, {
            // name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
          }, {
            // name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
          }
        ]
      };
    }
    // ========================================
   
    // ========================================
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
export default StackedBarChart;