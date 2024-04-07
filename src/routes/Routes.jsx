const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layouts/MainLayout");
const { default: Home } = require("../pages/Home");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])