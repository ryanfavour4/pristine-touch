import { lazy } from "react";
import ErrorPage from "@/pages/error";
import { createBrowserRouter, Outlet } from "react-router";
import Loadable from "@/layouts/loadable";
import ProtectedRoute from "./protected";
import CoursePage from "@/pages/test-page-player";

const HomePage = Loadable(lazy(() => import("@/pages/home")));
const AboutPage = Loadable(lazy(() => import("@/pages/about")));
const ServicePage = Loadable(lazy(() => import("@/pages/services")));
const ContactPage = Loadable(lazy(() => import("@/pages/contact")));

const Routers = [
    {
        path: "/home",
        element: (
            <>
                <ProtectedRoute>
                    <RoutesRoot />
                </ProtectedRoute>
            </>
        ),
        children: [{ path: "", exact: true, element: <HomePage /> }],
    },
    {
        path: "/",
        element: (
            <>
                <RoutesRoot />
            </>
        ),
        children: [
            { path: "/", exact: true, element: <HomePage /> },
            {
                path: "/test-test",
                exact: true,
                element: <CoursePage params={{ id: "nextjs-101" }} />,
            },
            { path: "/about-us", exact: true, element: <AboutPage /> },
            { path: "/service", exact: true, element: <ServicePage /> },
            { path: "/contact", exact: true, element: <ContactPage /> },
            { path: "/book-now", exact: true, element: <ContactPage /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
];

const routers = createBrowserRouter(Routers);

// eslint-disable-next-line react-refresh/only-export-components
function RoutesRoot() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default routers;
