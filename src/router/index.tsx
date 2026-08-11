import { createBrowserRouter } from "react-router-dom";

import RouteLayout from "@/layouts/RouteLayout";

import HomePage from "@/pages/Home";
import DashboardPage from "@/pages/Dashboard";
import WardPage from "@/pages/Ward";
import NinhKieuDashboardPage from "@/pages/Ward/NinhKieuDashboard";
import SchoolPage from "@/pages/School";
import TeacherPage from "@/pages/Teacher";
import FacilityPage from "@/pages/Facility";
import GISPage from "@/pages/GIS";
import AlertPage from "@/pages/Alert";
import ReportPage from "@/pages/Report";
import SchoolDetailPage from "../pages/School/Detail";
import TeacherDetailPage from "@/pages/Teacher/Detail";

export const router = createBrowserRouter([
    {
        element: <RouteLayout />,

        children: [
            {
                path: "/",
                element: <HomePage />,
            },

            {
                path: "/dashboard",
                element: <DashboardPage />,
            },

            {
                path: "/ward",
                element: <WardPage />,
            },

            {
                path: "/ward/ninh-kieu",
                element: <NinhKieuDashboardPage />,
            },

            {
                path: "/school",
                element: <SchoolPage />,
            },

            {
                path: "/school/:id",
                element: <SchoolDetailPage />,
            },

            {
                path: "/teacher",
                element: <TeacherPage />,
            },

            {
                path: "/facility",
                element: <FacilityPage />,
            },

            {
                path: "/gis",
                element: <GISPage />,
            },

            {
                path: "/alert",
                element: <AlertPage />,
            },

            {
                path: "/report",
                element: <ReportPage />,
            },

            {
                path: "/teacher",
                element: <TeacherPage />,
            },

            {
                path: "/teacher/:id",
                element: <TeacherDetailPage />,
            },
        ],
    },
]);