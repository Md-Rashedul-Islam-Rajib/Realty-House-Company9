import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "../components/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/estatedetails/:id',
                element: <PrivateRoute>
                    <EstateDetails></EstateDetails>
                </PrivateRoute>,
                loader: () => fetch('/data.json'),

            },
            {
                path: '/services',
                element: <PrivateRoute>
                    <Services></Services>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/userprofile',
                element: <PrivateRoute>
                <UserProfile></UserProfile>
                </PrivateRoute>

            },
            {
                path: '/updateprofile',
                element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])