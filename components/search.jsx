import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Search({ user, logout, data }) {
  const [dropdown, setDropdown] = useState(false);
  const [display, setDisplay] = useState(false);
  
  const [companies, setCompanies] = useState(data);
  //console.log(companies)
  useEffect(() => {
    const closeDisplay = (e) => {
      if (e.path[0].tagName !== "INPUT") {
        setDisplay(false);
      }
    };
    document.addEventListener("click", closeDisplay);
    return () => document.removeEventListener("click", closeDisplay);
  });
  const handleSearch = (e) => {  
    const companies = data.filter((dat) => dat.code.startsWith(e.target.value.toUpperCase()))
    setCompanies(companies);
    //console.log(companies)
  };
  const DisplayData =
    companies &&
    companies
      .sort((a, b) => (a.code > b.code ? 1 : -1))
      .slice(0, 10)
      .map((dat) => {
        return (
          <li
            className="flex flex-row even:bg-gray-200 odd:bg-white border border-slate-300"
            key={dat.id}
          >
            <Link href={"/stock/" + dat.code} className="flex flex-row">
              <span
                scope="row"
                className="py-2 px-3 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white"
              >
                {dat.code}
              </span>
              <span className="py-2 px-3 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white">
                {dat.name}
              </span>
            </Link>
          </li>
        );
      });
  return (
    <div className="bg-searchbar md:px-40">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="grid">
            <div className="inline-block">
              <a title="AmarStock Limited" href="/">
                <img
                  crossOrigin="anonymous"
                  className="h-img"
                  src="https://staticv2.amarstock.com/Content/img/logo.png"
                  alt="AmarStock logo"
                />
              </a>
            </div>
          </div>

          <div className="flex items-center w-1/2 justify-end">
            {/* search Box */}
            <div className="inline-block w-6/12 ">
              <form className="flex items-center bg-white">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <input
                    type="text"
                    id="simple-search"
                    onFocus={() => {
                      setDisplay(true);
                    }}
                    onKeyUp={handleSearch}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full pl-10 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Trading code"
                    required
                  />

                  {display && (
                    <div className="absolute bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-fit dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                      <ul className="">{DisplayData}</ul>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className=" p-0.5 text-sm font-medium bg-gray-200 text-gray-500 bg-slate-200 border hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            {/* Signin */}
            <div className="justify-self-end">
              <ul className="flex flex-wrap text-sm font-medium text-center text-white border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="">
                  <a
                    href="/onlineTraining"
                    className="inline-block px-2 py-3  hover:text-yellow-400 hover:bg-navmain dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  >
                    OnlineTraining
                  </a>
                </li>
                <li className="">
                  <a
                    onMouseOver={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    {dropdown && (
                      <div
                        onMouseOver={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        className="absolute top-8 bg-black hover:text-gray-400 text-white top-6 rounded-md px-5 "
                      >
                        <ul>
                          <li onClick={logout} className="py-1">
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}
                    {user.value && (
                      <FontAwesomeIcon
                        icon={faUser}
                        size="lg"
                        className="inline-block px-2 py-3"
                      />
                    )}
                  </a>
                  {!user.value && (
                    <Link legacyBehavior href={"/login"}>
                      <a>
                        <button className="inline-block px-2 py-3  hover:text-yellow-400 hover:bg-navmain dark:hover:bg-gray-800 dark:hover:text-gray-300">
                          Login
                        </button>
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
