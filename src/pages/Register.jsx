import { useContext, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const Register = () => {
  // const navigate = useNavigate();
    const {createUser, logOutUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => {
        const {email, password} = data;
          if(password.length < 6){
            return setError('password must be 6 characters')
          }
          if(!/[A-Z]/.test(password)){
            return setError('password must have at least one uppercase characters')
          }
          if(!/[a-z]/.test(password)){
            return setError('password must have at least one lowercase characters')
          }

          setError('');
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
            toast.success('Account created successfully');
            logOutUser()
            
        //     setInterval(() => {
        //       navigate("/login");
        // }, 2000);

        })
        .catch(error=> {
            console.log(error);
        })
      }
    
    return (
        <div className='p-2 md:w-2/5 mx-auto border rounded-lg p-2'>
          <Helmet> 
            <title>Register</title>
          </Helmet>
<form onSubmit={handleSubmit(onSubmit)}>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Name" {...register("Name")} />
</label>

            


<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" {...register('email', { required: true })}/>
</label>
  {errors.email && <p className="text-red-600 text-sm">Email is required</p>}


<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <IoImagesOutline />
  <input type="text" className="grow" placeholder="Photo URL" {...register('PhotoURL')} />
  
</label>

<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type={showPassword ? 'text' : 'password'} className="grow" placeholder="Password" {...register('password', { required: true })}/>
  <span onClick={()=> {setShowPassword(!showPassword)}}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
</label>
  {errors.password && <p className="text-red-600 text-sm">Password is required</p>}
  {error && <p className="text-red-600 text-sm">{error}</p>}

<button className="btn bg-[#024CB5] text-white w-full">Register</button>
</form>

<div className="flex justify-between text-[#024CB5] font-semibold my-4">
    <p>Already have account?</p>
    <Link to='/login'><p>Login Here</p></Link>
</div>
<Toaster />
        </div>
    );
};

export default Register;