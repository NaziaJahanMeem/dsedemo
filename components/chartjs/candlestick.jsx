// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

import 'chartjs-adapter-luxon';


export default function candleStick() {

  const data = {
    // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      // ......................................
      data: [
        {
          x: new Date('2022-06-01').setHours(0, 0, 0, 0),
          o: 1,
          h: 1.50,
          l: 0.75,
          c: 1.25,
          s: [1, 1.25]
        },
        {
          x: new Date('2022-06-02').setHours(0, 0, 0, 0),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.90,
          s: [1.25, 0.90]
        },
        {
          x: new Date('2022-06-03').setHours(0, 0, 0, 0),
          o: 0.90,
          h: 2.50,
          l: 0.50,
          c: 1.90,
          s: [0.90, 1.90]
        },
        {
          x: new Date('2022-06-04').setHours(0, 0, 0, 0),
          o: 1.90,
          h: 2.50,
          l: 0.50,
          c: 1.50,
          s: [1.90, 1.50]
        },
        {
          x: new Date('2022-06-05').setHours(0, 0, 0, 0),
          o: 1.50,
          h: 2.50,
          l: 0.50,
          c: 0.20,
          s: [1.50, 0.20]
        },
      ],
      // ......................................

      // data: [18, 12, 6, 9, 12, 3, 9],
      // backgroundColor: [
      //   'rgba(255, 26, 104, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      //   'rgba(0, 0, 0, 0.2)'
      // ],
      backgroundColor: (ctx) => {
        const { raw: { o, c } } = ctx;
        // console.log(ctx);
        let color;
        if (c <= o) {
          color = 'rgba(255, 0, 0, 1)';
        }
        else {
          color = 'rgba(0, 255, 0, 1)';
        }
        return color;
      },
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 2,
      borderSkipped: false
    }]
  };

  //candlestick plugin block
  // const candlestick = {
  //   id: 'candlestick',
  //   beforeDtatasetsDraw(chart, args, pluginOptions) {
  //     const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
  //     ctx.save();
  //     ctx.lineWidth = 2;
  //     ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  //     console.log("helloooooooooooo...");
  //     console.log(chart.getDatasetMeta(0).data[0]);
  //     ctx.beginPath();
  //     ctx.moveTo(chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
  //     ctx.lineTo(chart.getDatasetMeta(0).data[0].x, y.getPixelForValue(data.datasets[0].data[0].h));
  //     ctx.stroke();
  //   }
  // }

  // // config 
  // const config = {
  //   type: 'bar',
  //   maintainAspectRatio: false,
  //   data,
  //   options: {
  //     parsing: {
  //       xAxisKey: 'x',
  //       yAxisKey: 's'
  //     },
  //     scales: {
  //       x:{
  //         type: 'timeseries',
  //         time:{
  //           unit: 'day'
  //         },
  //       },
  //       y: {
  //         beginAtZero: true
  //       }
  //     },
  //     plugins: [candlestick]
  //     // plugins: {
  //     //   title: {
  //     //     display: true,
  //     //     text: 'Chart.js Bar Chart - Stacked',
  //     //   },
  //     // },
  //   }
  // };

  useEffect(() => {
      const candlestick = {
    id: 'candlestick',
    beforeDtatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
      console.log("helloooooooooooo...");
      console.log(chart.getDatasetMeta(0).data[0]);
      ctx.beginPath();
      ctx.moveTo(chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      ctx.lineTo(chart.getDatasetMeta(0).data[0].x, y.getPixelForValue(data.datasets[0].data[0].h));
      ctx.stroke();
    }
  }

  // config 
  const config = {
    type: 'bar',
    maintainAspectRatio: false,
    data,
    options: {
      parsing: {
        xAxisKey: 'x',
        yAxisKey: 's'
      },
      scales: {
        x:{
          type: 'timeseries',
          time:{
            unit: 'day'
          },
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: [candlestick]
      // plugins: {
      //   title: {
      //     display: true,
      //     text: 'Chart.js Bar Chart - Stacked',
      //   },
      // },
    }
  };
    var ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx,
      config
    );
  }, [])
  return (
    <div className="candlestick" style={{ height: 400, width: 600 }}>
      <br />
      <br />
      <br />
      <br />
      <h2>CandleStick Chart</h2>
      <canvas id="myChart"></canvas>
    </div>
  )
  // return (
  //   <div className='barchart' style={{height:400, width:600}}>
  //     <h2>Bar Chart</h2>
  //     <Bar
  //       data={data}
  //       width={400}
  //       height={200}
  //       options={{
  //         maintainAspectRatio: false,
  //         parsing: {
  //           xAxisKey: 'x',
  //           yAxisKey: 's'
  //         },
  //         scales: {
  //           x:{
  //             type: 'timeseries',
  //             time:{
  //               unit: 'day'
  //             },
  //           },
  //           y: {
  //             beginAtZero: true
  //           }
  //         },
  //         plugins: {
  //           title: {
  //             display: true,
  //             text: 'CandleStick Chart',
  //           },
  //         },
  //       }}
  //     />
  //   </div>
  // );
};
