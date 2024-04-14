import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const UserProfile = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="w-60 h-60 mx-auto">
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