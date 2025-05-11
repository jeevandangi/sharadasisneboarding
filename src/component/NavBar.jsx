import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/admission", label: "Admission" },

        { path: "/events", label: "Events" },
        { path: "/gallery", label: "Gallery" },
        { path: "/notices", label: "Notices" },
        { path: "/contact", label: "Contact" },
    ];


    return (
        <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo and Location */}
                <div className="flex flex-col">
                    <Link to="/" className="text-2xl font-bold text-yellow-500">
                        Sharada Sisne
                    </Link>
                    <span className="text-sm text-yellow-500 font-bold text-center  -mt-1">Tulsipur-5, Dang</span>
                </div>


                {/* Hamburger Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Nav Links for Desktop */}
                <div className="space-x-4 hidden md:flex">
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `text-sm font-medium ${isActive ? "text-yellow-500" : "text-white"
                                } hover:text-yellow-400`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`bg-red-600 w-64 h-full shadow-lg p-6 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-all duration-300 ease-in-out`}
                >
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <ul className="space-y-4">
                        {navItems.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `block text-lg ${isActive ? "text-yellow-500" : "text-white"
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
