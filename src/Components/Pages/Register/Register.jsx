import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
}, []);
  
  const is_valid_image_url = async (url) => {
    const supportedFormats = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
    const isValidFormat = supportedFormats.some(format => url.toLowerCase().endsWith(format));
    return isValidFormat;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");
    const password = form.get("password");
    const isValidImage = await is_valid_image_url(image);
    if(name === "" || email === "" || password === "" || image === ""){
      toast.error("Input field must not be empty.");
    } else if (!isValidImage) {
      toast.error('Image must be .png, .jpg, .gif, .svg');
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please provide an valid Email.");
    }else if(password.length < 6){
      toast.error("Password must be at least 6 characters.");
    }else{
      createUser(email, password)
      .then((result)=>{
        updateProfile(result.user, {
          displayName: name,
          photoURL: image
        }).then(() => {
        }).catch((error) => {
        });
        toast.success("Account created successfully.")
        console.log(result.user)
        e.target.reset();
      })
      .catch((error)=>{
        toast.error("An account already exists!")
      })
    }
  };

  return (
    <div data-aos="zoom-in-up" className="flex justify-center mt-10 px-2 md:mb-20 mb-10">
      <Helmet>
        <title>Residence-Register</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="max-w-[1050px]">
        <div className="grid grid-cols-12 md:h-[550px] h-[460px]">
          <div className="col-span-6 rounded-2xl hidden w-full md:block">
            <img
              className="rounded-l-2xl h-full"
              src="https://i.ibb.co/NrtzjfX/home-section.jpg"
              alt=""
            />
          </div>
          <div className="col-span-12 md:col-span-6 border rounded-2xl md:rounded-r-2xl px-5 pt-[30px]">
            <form onSubmit={handleRegister} className="">
              <div className="">
                <div>
                  <h1 className="text-[30px] mb-5">Create an Account</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Image URL"
                    name="image"
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
                    Registration
                  </button>
                  <h1 className="text-[#727272] mt-5">Already Have An Account ? <Link to="/login"><span className="font-bold text-[#A62F03]">Login</span></Link></h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
