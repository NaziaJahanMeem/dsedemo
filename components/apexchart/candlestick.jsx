import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class CandleStick extends Component {
  constructor(props) {
    super();

    this.state = {
      options: {
        chart: {
          id: "candlestick",
          // height: '100%',
          // width: '100%',
        },
        xaxis: {
          type: 'datetime'
        }
      },
      series: [{
        data: [/*{
          x: new Date('2016-01-01'),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date('2016-02-01'),
          y: [53.66, 54.99, 51.35, 52.95]
        }*/]
      }]
    };
  }

  //======================================================
  componentDidMount() {
    // let res = 10;
    let endpoint = "http://localhost:3000/api";
    fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((Response) => Response.json())
      .then((dat) => {
        // console.log("======", dat);
        // this.setState({ series: [{ data: res }] });
        this.setState({ series: [{ data: dat }] });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state);
    // console.log("res....", res);
  }

  //==========================================================

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              width="1100"
              height='290'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CandleStick;