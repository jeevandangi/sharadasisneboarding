import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";
import Footer from "../component/Footer";


const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-[system-ui]">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
