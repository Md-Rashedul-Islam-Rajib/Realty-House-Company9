import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="md:mx-12">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-4">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;