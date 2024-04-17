import { IoImagesOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const UpdateProfile = () => {
    const {user,setUser} = useContext(AuthContext);
const navigate = useNavigate();
 
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => {
        const {name,photo} = data;
        console.log(name);
        console.log(photo);
        updateProfile(auth.currentUser, {
          displayName: name,
           photoURL: photo
        }).then(() => {
          setUser({...user,displayName:name,photoURL:photo})
          toast.success('Profile information updated successfully')
          navigate('/')
        }).catch((error) => {
          // An error occurred
          // ...
        });
        }
    return (
        <div className="animate__animated animate__fadeIn">
          <Helmet> 
            <title>Update Profile | Realty House Company</title>
          </Helmet>
            <div className="text-center text-xl font-bold mb-4">
            <h2>User Information</h2>
            </div>
            <div className='md:w-2/5 mx-auto border rounded-lg p-2'>

<form onSubmit={handleSubmit(onSubmit)}>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder={user.displayName? user.displayName: "Name is not available"} {...register("name")} />
</label>

            


<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" value={user?.email ? user.email : "Email is not available"}/>
  {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
</label>


<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <IoImagesOutline />
  <input type="text" className="grow" placeholder={user.photoURL? user.photoURL: "PhotoURL is not available"} {...register('photo')} />
  
</label>



<button className="btn bg-[#024CB5] text-white w-full">Update</button>
</form>


<Toaster />
        </div>
        </div>
    );
};

export default UpdateProfile;