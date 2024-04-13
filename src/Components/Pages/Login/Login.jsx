import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {userLogin, googleLogin, gitHubLogin} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("statelocation",location)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        if(email == "" || password == ""){
          toast.error("Input field must not be empty.");
        }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
          toast.error("Please provide an valid Email.");
        }else if(password.length < 6){
          toast.error("Password must be at least 6 characters.");
        }else{
          userLogin(email,password)
          .then((result)=>{
            toast.success("Account successfully login.");
            e.target.reset();
            navigate(location.state ? location.state : "/")
          })
          .catch((error) => {
            toast.error("Incorrect email or password.");
          })
        }
        
    }
    const handleGoogleLogin = () => {
      console.log("hello")
      googleLogin()
      .then((result) => {
        toast.success("Account successfully login.");
        navigate(location.state ? location.state : "/")
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      })
    }
    const handleGitHubLogin = () => {
      gitHubLogin()
      .then((result) => {
        toast.success("Account successfully login.");
        navigate(location.state ? location.state : "/")
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      })
    }
  return (
    <div className="flex justify-center mt-10 px-10 mb-20">
      <Helmet><title>Residence-Login</title></Helmet>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="max-w-[1050px]">
        <div className="grid grid-cols-12 h-[550px]">
          <div className="col-span-6 rounded-2xl">
            <img
              className="rounded-l-2xl h-full"
              src="https://i.ibb.co/0yJxTfZ/couch-980x777.jpg"
              alt=""
            />
          </div>
          <div className="col-span-6 border rounded-r-2xl px-5 pt-[90px]">
            <form onSubmit={handleLogin} className="">
              <div className="">
                <div>
                  <h1 className="text-[30px] mb-5">Create Account</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="flex items-center justify-center relative">
                    <input
                      className="border pl-4 outline-none rounded h-[45px] w-full"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                    />
                    <div onClick={() => setShowPassword(!showPassword)} className="text-[20px] absolute right-5 cursor-pointer">
                      {showPassword ? <span ><FaRegEye /></span> : <span><FaRegEyeSlash /></span>}
                      
                      
                    </div>
                  </div>
                  <button className="w-full h-[45px] border bg-[#A62F03] text-white rounded">
                    Login
                  </button>
                  <h1 className="text-center font-bold text-[#727272]">Or</h1>
                  <div className="px-10 flex gap-3">
                    <div onClick={handleGoogleLogin} className="w-full gap-3 h-[45px] border bg-white rounded flex justify-center items-center cursor-pointer">
                        <img className="h-5" src="https://i.ibb.co/ZRrrfwg/google-icon-2048x2048-czn3g8x8.png" alt="google" />
                        <h1>Google</h1>
                    </div>
                    <div onClick={handleGitHubLogin} className="w-full gap-3 h-[45px] border bg-white rounded flex justify-center items-center cursor-pointer">
                        <img className="h-5" src="https://i.ibb.co/ScG58Zy/github-logo-7880-D80-B8-D-seeklogo-com.png" alt="github" />
                        <h1>Github</h1>
                    </div>
                  </div>
                  <h1 className="text-[#727272] mt-5">Dont’t Have An Account ?  <Link to="/register"><span className="font-bold text-[#A62F03]">Register</span></Link></h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
