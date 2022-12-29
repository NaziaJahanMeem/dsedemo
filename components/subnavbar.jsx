import React from 'react';
import { Button, Navbar } from 'flowbite-react';

export default function SubNavbar() {
    return (
        <nav className="px-2 bg-searchbar border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="container mx-auto">
                <div className="hidden md:inline-block ml-2" id="navbar-multi-level">
                    <ul className="mt-2 flex flex-col md:flex-row md:space-x-0.5 md:text-sm md:font-medium  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='bg-white p-1 px-2'>
                            <a href="#" className="block text-searchbar rounded md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">INFO</a>
                        </li>
                        <li className='bg-navmain p-1 px-2'>
                            <a href="#" className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CHART</a>
                        </li>
                        <li className='bg-navmain p-1 px-2'>
                            <a href="#" className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NEWS</a>
                        </li>
                        <li className='bg-navmain p-1 px-2'>
                            <a href="#" className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">VPA</a>
                        </li>
                        <li className='bg-navmain p-1 px-2'>
                            <a href="#" className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">MARKET DEPTH</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
