import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleMenuButtonClick = () => {
        if (isMenuOpen) {
            toggleMenu();
        } else {
            toggleMenu();
        }
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <nav className="bg-gray-600 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center">
                    <img src="https://www.mavidev.com/images/mavidev_logo_light.png" className="h-8 mr-3" alt="Flowbite Logo" />
                </Link>
                <button
                    onClick={handleMenuButtonClick}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div
                    onBlur={closeMenu}
                    className={`w-full md:w-auto activeButton ${isMenuOpen ? 'block' : 'hidden md:block'}`}
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-600 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to={"/"}
                                onClick={handleLinkClick}
                                className={`link block py-2 pl-3 pr-4 ${location.pathname === "/"
                                    ? "text-blue-700"
                                    : "text-white md:text-white dark:text-blue-500"
                                    } rounded md:p-0`}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/city"}
                                onClick={handleLinkClick}
                                className={`link block py-2 pl-3 pr-4 ${location.pathname === "/city"
                                    ? "text-blue-700"
                                    : "text-white md:text-white dark:text-gray-900 md:dark:hover:text-gray-900"
                                    } rounded md:p-0`}
                            >
                                CITY
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/state"}
                                onClick={handleLinkClick}
                                className={`link block py-2 pl-3 pr-4 ${location.pathname === "/state"
                                    ? "text-blue-700"
                                    : "text-white md:text-white dark:text-gray-900 md:dark:hover:text-gray-900"
                                    } rounded md:p-0`}
                            >
                                STATE
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;
