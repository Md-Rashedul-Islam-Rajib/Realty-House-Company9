import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import 'animate.css';


const UserProfile = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className="animate__animated animate__slideInUp">
            <Helmet> 
            <title>Profile | Realty House Company</title>
          </Helmet>
            <div className="max-w-96 mx-auto">
            <img className="rounded-xl" src={user.photoURL} alt="" />
            </div>
            <div className="text-center font-medium flex flex-col gap-4 my-4">
                <h2>Name : <span className="text-[#646262]">{user.displayName? user.displayName: "Not available"}</span></h2>
            <h2>Email : <span className="text-[#646262]">{user.email? user.email: "Not available"}</span></h2>
            <h2>Photo : <span className="text-[#646262]"> {user.photoURL? user.photoURL: "Not available"}</span></h2>
            </div>
        </div>
    );
};

export default UserProfile;