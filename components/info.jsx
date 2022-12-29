import React from 'react';
import BarChart from './apexchart/barchart';
import InfoTable from './addressTable';
import LineChart from './apexchart/linechart';
import Card from './card';
import { PromiseProvider } from 'mongoose';
export default function info() {

    //let cards = ['P/E RATIO', 'EPS', 'PRICE/NAV', 'FREE FLOAT', 'BETA', 'DIVIDEND YIELD'];
    let cards=[
        {
            name:'P/E RATIO',
            value:28.14
        },
        {
            name:'EPS',
            value:1.45
        },
        {
            name:'PRICE/NAV',
            value:0.59
        },
        {
            name:'FREE FLOAT',
            value:69.99
        },
        {
            name:'BETA',
            value:1.81
        },
        {
            name:'DIVIDENT YIELD',
            value:1.91
        }
    ]
    return (
        <div className="">
            <div className='container mx-auto'>
                <div className="grid grid-cols-2">
                    {/* Chart */}
                    <div className='chart'>
                        <LineChart />
                    </div>
                    {/* tables */}
                    <div className="tables">
                        <div className='grid grid-cols-2 '>
                            <div className='grid px-2'>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Prev Close
                                        </span>
                                        <br />
                                        <span >
                                            50.9
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Open
                                        </span>
                                        <br />
                                        <span >
                                            50.8
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Day's Range
                                        </span>
                                        <br />
                                        <span >
                                            55.60 - 57.10
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            52 Weeks Range
                                        </span>
                                        <br />
                                        <span >
                                            34.70 - 58.40
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Q1 EPS
                                        </span>
                                        <br />
                                        <span >
                                            1.04
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Q2 EPS
                                        </span>
                                        <br />
                                        <span >
                                            0
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Q3 EPS
                                        </span>
                                        <br />
                                        <span >

                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Q4 EPS
                                        </span>
                                        <br />
                                        <span >
                                            0
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-1'>
                                    <div>
                                        <span >
                                            Authorized Capital(mn)
                                        </span>
                                        <br />
                                        <span >
                                            1000
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='grid px-2'>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            MCap(Tk. in mn)
                                        </span>
                                        <br />
                                        <span >
                                            3300.049
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Total Volume
                                        </span>
                                        <br />
                                        <span >
                                            966900
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            6M return
                                        </span>
                                        <br />
                                        <span >
                                            44.36%
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            1Y return
                                        </span>
                                        <br />
                                        <span >
                                            17.05%
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Last AGM
                                        </span>
                                        <br />
                                        <span >
                                            27/12/2021
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Listed Since
                                        </span>
                                        <br />
                                        <span >
                                            2017
                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Category
                                        </span>
                                        <br />
                                        <span >
                                            A
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Credit Rating
                                        </span>
                                        <br />
                                        <span >

                                        </span>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span >
                                            Total Shares
                                        </span>
                                        <br />
                                        <span >
                                            59034865
                                        </span>
                                    </div>
                                    <div className='text-right'>
                                        <span >
                                            Paid-Up Cap(mn)
                                        </span>
                                        <br />
                                        <span >
                                            590.35
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <InfoTable />
                    </div>
                </div>
                {/* cards */}
                <div className='flex justify-between'>
                    {
                        cards.map(item => <Card key={item} name={item.name} value={item.value} />
                        )
                    }
                </div>
            </div>
        </div>
    )
};