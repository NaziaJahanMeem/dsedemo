import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import 'chartjs-plugin-zoom';
// Chart.register(zoomPlugin);
// import Chart from 'chart.js/auto';

// =======================================================
export default function lineChart() {

    const [idxData, setidxData] = useState([]);
    const Data = [];
    const Date = [];

    const endpoint = "http://localhost:3000/api";

    useEffect(() => {
        // console.log("printing..............");
        fetch(endpoint, {
            method: "GET",
            // mode: 'cors',
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            // body: JSON.stringify({ query: query }),
        })
            .then((Response) => Response.json())
            .then((data) => {
                // console.log("======", typeof(data));
                setidxData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // console.log(idxData);
    //==================================================================

    idxData.forEach((dat) => {
        Data.push(dat.IDX_CAPITAL_VALUE);
        let dt = dat.IDX_DATE_TIME.substring(0, 10);
        if (dat.IDX_INDEX_ID == 'DS30' && dt == '2022-04-06') {
            let time = dat.IDX_DATE_TIME.match(/\d\d:\d\d/);        //...........
            Date.push(time);
            Data.push(dat.IDX_CAPITAL_VALUE);
        }
        // Date.push(dt);
    });
    console.log("values", Date);
    //=======================================================================

    // let isoDate = '2018-01-01T18:00:00Z';
    // let result = isoDate.match(/\d\d:\d\d/);
    // console.log(result[0]);



    // ==========================================================
    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: Date,
        datasets: [{
            label: 'DS30',
            data: Data,
            fill: false,
            borderWidth: 1
        }]
    }


    return (
        <div className='barchart' style={{ height: 400, width: 600 }}>
            <h2>Line Chart</h2>
            <Line
                data={data}
                // width={400}
                // height={200}
                options={{
                    plugins: {
                        // title: {
                        //     display: true,
                        //     text: 'Line Chart',
                        // },
                        zoom: {
                            zoom: {
                              wheel: {
                                enabled: true,
                              },
                              pinch: {
                                enabled: true
                              },
                              mode: 'xy',
                            }
                          },
                    },
                    maintainAspectRatio: false
                }}
            />
        </div>
    );

    // const config = {
    //     type: 'line',
    //     maintainAspectRatio: false,
    //     data: data,
    //     options: {
    //         scales: {
    //             x: {
    //                 beginAtZero: true
    //             },
    //             y: {
    //                 beginAtZero: true
    //             }
    //         },
    //         plugins: {
    //             zoom: {
    //                 zoom: {
    //                     wheel: {
    //                         enabled: true,
    //                     },
    //                     pinch: {
    //                         enabled: true
    //                     },
    //                     mode: 'xy',
    //                 }
    //             },
    //         },
    //         maintainAspectRatio: false
    //     }
    // };

    //==============================dummy data===============================

    // const config = {                                   
    //     type: 'line',
    //     data: {
    //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //       datasets: [{
    //         label: 'My First Dataset',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1
    //       }]
    //     },
    //     options: {
    //       plugins: {
    //         zoom: {
    //           zoom: {
    //             wheel: {
    //               enabled: true,
    //             },
    //             pinch: {
    //               enabled: true
    //             },
    //             mode: 'xy',
    //           }
    //         }
    //       }
    //     }
    //   };
 //==============================dummy data===============================

    // useEffect(() => {
    //     var ctx = document.getElementById('my')
    //     const myChart = new Chart(ctx,
    //         config
    //     );
    // }, [])
    // return (
    //     <div className="candlestick" style={{ height: 400, width: 600 }}>
    //         <br />
    //         <br />
    //         <br />
    //         <br />
    //         <h2>CandleStick Chart</h2>
    //         <canvas id="my"></canvas>
    //     </div>
    // )
};