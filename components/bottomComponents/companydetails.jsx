import { Tab } from '@headlessui/react'
import Head from 'next/head'
import { FaMoneyBill } from "react-icons/fa"
import classNames from 'classnames'
import TableContents2 from './tableContents2'
import TableContents1 from './tableContents1'
import TableContents3 from './tableContents3'
const CompanyDetails = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
            </Head>
            <div className="w-full px-44 py-5 mx-auto">
                <h1 className='font-semibold text-2xl'>Company Details</h1>
                <h3>Check out the key parameters of the company to understand the financial health and stock performance</h3>
                <Tab.Group>
                    <Tab.List className="flex space-x-5 rounded-xl pt-10 pl-4">
                        <Tab className={({ selected }) => classNames("w-56 py-2.5 text-white", selected ? 'bg-white text-black' : ' bg-navmain')}>
                            <h1 className='flex justify-start font-medium text-lg pl-3'>TECHNICAL</h1>
                            <div className='flex flex-row'>
                                <i className="fa fa-sliders text-[2rem] px-3" aria-hidden="true"></i>
                                <h4 className='text-xs'>The key level help you <br />plan your entry & exit</h4>
                            </div>
                        </Tab>
                        <Tab className={({ selected }) => classNames("w-56 py-2.5 text-white", selected ? 'bg-white text-black' : 'bg-navmain')}>
                            <h1 className='flex justify-start font-medium text-lg pl-3'>CASH FLOW</h1>
                            <div className='flex flex-row'>
                                <FaMoneyBill className='h-9 w-32' />
                                <h4 className='text-xs'>A detail view of cash flow, how it comes in and out</h4>
                            </div>
                        </Tab>
                        <Tab className={({ selected }) => classNames("w-56 py-2.5 text-white", selected ? 'bg-white text-black' : 'bg-navmain')}>
                            <h1 className='flex justify-start font-medium text-lg pl-3'>PROFIT & LOSS</h1>
                            <div className='flex flex-row'>
                                <i className="fa fa-line-chart text-[2rem] pl-3" aria-hidden="true"></i>
                                <h4 className='text-xs'>Details of revenues and expenditure sheet</h4>
                            </div>
                        </Tab>
                        <Tab className={({ selected }) => classNames("w-56 py-2.5 text-white", selected ? 'bg-white text-black' : 'bg-navmain')}>
                            <h1 className='flex justify-start font-medium text-lg pl-3'>BALANCE SHEET</h1>
                            <div className='flex flex-row'>
                                <i className="fa-solid fa-scale-balanced text-[2rem] pl-3 pr-3"></i>
                                <h4 className='text-xs'>Statement of assets, <br /> liabilities and share</h4>
                            </div>
                        </Tab>
                        <Tab className={({ selected }) => classNames("w-56 py-2.5 text-white", selected ? 'bg-white text-black' : 'bg-navmain')}>
                            <h1 className='flex justify-start font-medium text-lg pl-3'>DIVIDENT HISTORY</h1>
                            <div className='flex flex-row'>
                                <i className="fa-regular fa-handshake text-[2rem] px-3"></i>
                                <h4 className='text-xs'>Check out the <br /> detailed payout data</h4>
                            </div>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel><TableContents1 /></Tab.Panel>
                        <Tab.Panel><TableContents2 /></Tab.Panel>
                        <Tab.Panel><TableContents2 /></Tab.Panel>
                        <Tab.Panel><TableContents2 /></Tab.Panel>
                        <Tab.Panel><TableContents3 /></Tab.Panel>
                    </Tab.Panels>

                </Tab.Group>
            </div>
        </div>
    )
}
export default CompanyDetails