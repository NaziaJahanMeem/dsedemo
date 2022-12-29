import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import QuarterlyReport from './quarterlyReport'
import AnnualReport from './annualreport'
const Report=()=>{
    return(
        <div className='px-44 py-5'>
        <Tab.Group>
            <Tab.List className="flex space-x-3 rounded-xl ">
                <Tab className={({ selected }) => classNames("w-40 py-2 text-white", selected ? 'bg-white text-black' : ' bg-navmain')}>
                    <h1>Quarterly Report</h1>
                    
                </Tab>
                <Tab className={({ selected }) => classNames("w-40 py-2 text-white", selected ? 'bg-white text-black' : 'bg-navmain')}>
                    <h1>Annual Report</h1>
                    
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel><QuarterlyReport /></Tab.Panel>
                <Tab.Panel><AnnualReport /></Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
        </div>
    )
}
export default Report