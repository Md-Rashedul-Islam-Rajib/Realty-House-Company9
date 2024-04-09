import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import Register from "../pages/Register";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])