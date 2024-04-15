import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="mx-2 md:mx-4 lg:mx-12">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-4">
            <Footer></Footer>
            </div>
            <Toaster />
        </div>
    );
};

export default MainLayout;