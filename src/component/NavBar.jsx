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
        <nav className=" bg-white  text-black shadow-md sticky top-0" style={{ zIndex: 1000 }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo and Location */}
                <div className=" flex items-center gap-4">

                    <div className="flex flex-col">

                        <Link to="/" className="text-lg greatvibes-font italic font-bold text-red-500">
                            <h1 class="text-4xl font-bold">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 greatvibes-font  ">
                                    Sharada
                                </span>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400  greatvibes-font">
                                    Sisne
                                </span>
                            </h1>

                        </Link>
                    </div>
                </div>


                {/* Hamburger Button */}
                <button
                    className="md:hidden p-2 text-blue"
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
                                `text-md font-semibold ${isActive ? "text-blue-500 " : "text-black"
                                } hover:text-black`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <NavLink to={"/login"} className=" font-semibold bg-green-500 text-white px-3 py-0.5">
                        Login
                    </NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-blue-200 bg-opacity-80 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`bg-white w-64 h-full shadow-lg p-6 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-all duration-300 ease-in-out`}
                >
                    <button
                        className="absolute top-4 right-4 text-black"
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
                                        `block text-lg ${isActive ? "text-blue-500" : "text-black"
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <NavLink to={"/login"} className="  text-black px-3 py-0.5">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;