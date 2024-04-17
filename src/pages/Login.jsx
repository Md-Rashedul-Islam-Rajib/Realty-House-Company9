import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { logInUser, setUser, googleLogin, githubLogin, user } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const destination = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Log in Successfully as " + email);
       
        // const timedelay= setTimeout(navigate(destination),6000);
          
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Log in Failed. Reason :" + errorMessage);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Log in Successfully as " + result.user.email);

        navigate(destination);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Log in successfully with Github");

        navigate(destination);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-2/5 mx-auto border rounded-lg p-2">
      <Helmet>
        <title>Login | Realty House Company</title>
      </Helmet>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">Email is required</span>
          )}
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            className="grow"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <span
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <span className="text-red-600 text-sm">Password is required</span>
          )}
        </label>

        <button className="btn bg-[#024CB5] text-white w-full">Log In</button>
      </form>
      <div className="flex justify-between my-4 text-[#024CB5] font-semibold">
        <p>New here?</p>
        <Link to="/register">
          <p>Create an account</p>
        </Link>
      </div>
      <div className="divider">Continue With</div>
      <div className="mt-4 flex">
        <FcGoogle onClick={handleGoogle} className="mx-auto h-10 w-10 cursor-pointer" />
        <FaGithub onClick={handleGithub} className="mx-auto h-10 w-10 cursor-pointer" />
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
