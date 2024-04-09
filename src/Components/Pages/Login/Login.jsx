import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const {userLogin} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        console.log(email,password)
        console.log(userLogin)
        userLogin(email,password)
        .then((result)=>{
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className="flex justify-center mt-10 px-10 mb-20">
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
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Password"
                  />
                  <button className="w-full h-[45px] border bg-[#A62F03] text-white rounded">
                    Login
                  </button>
                  <h1 className="text-center font-bold text-[#727272]">Or</h1>
                  <div className="px-10 flex gap-3">
                    <div className="w-full gap-3 h-[45px] border bg-white rounded flex justify-center items-center">
                        <img className="h-5" src="https://i.ibb.co/ZRrrfwg/google-icon-2048x2048-czn3g8x8.png" alt="google" />
                        <h1>Google</h1>
                    </div>
                    <div className="w-full gap-3 h-[45px] border bg-white rounded flex justify-center items-center">
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