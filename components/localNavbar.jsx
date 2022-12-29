import React from 'react';
import { Button, Navbar } from 'flowbite-react';

export default function LocalNavbar() {
    return (
        <nav className="px-2 border-gray-200 border-b mb-3 dark:bg-gray-900 dark:border-gray-700">
            <div className="container mx-auto">
                <div className="hidden md:inline-block ml-2 mb-2" id="navbar-multi-level">
                    <ul className="mt-2 flex flex-col md:flex-row md:space-x-0.5 md:text-sm md:font-medium  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className=' p-1 px-2 pl-0'>
                            <a href="#" className=" text-base block text-gray-800 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Info</a>
                        </li>
                        <li className='p-1 px-2 '>
                            <a href="#" className=" text-base border-l block text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 px-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Company Details</a>
                        </li>
                        <li className=' p-1 px-2'>
                            <a href="#" className=" text-base border-l px-2 block text-gray-800 hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-blue-700   dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Corporate Action</a>
                        </li>
                        <li className=' p-1 px-2'>
                            <a href="#" className=" text-base border-l px-2 block text-gray-800 hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-blue-700   dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
