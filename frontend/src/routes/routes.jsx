import Home from "../pages/Home";
import About from "../pages/About";
import Admission from "../pages/Admission";

import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Notices from "../pages/Notices";
import Layout from "../Layout/Layout";
import Login from "../pages/Login";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/admission", element: <Admission /> },

            { path: "/events", element: <Events /> },
            { path: "/contact", element: <Contact /> },
            { path: "/notices", element: <Notices /> },
            { path: "/login", element: <Login /> },
        ],
    },
];

export default routes;
