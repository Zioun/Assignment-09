import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser.user)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");
    const password = form.get("password");
    if(name == "" || email == "" || password == "" || image == ""){
      toast.error("Input field must not be empty.");
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
    <div className="flex justify-center mt-10 px-10 mb-20">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="max-w-[1050px]">
        <div className="grid grid-cols-12 h-[460px]">
          <div className="col-span-6 rounded-2xl">
            <img
              className="rounded-l-2xl h-full"
              src="https://i.ibb.co/0yJxTfZ/couch-980x777.jpg"
              alt=""
            />
          </div>
          <div className="col-span-6 border rounded-r-2xl px-5 pt-[30px]">
            <form onSubmit={handleRegister} className="">
              <div className="">
                <div>
                  <h1 className="text-[30px] mb-5">Create Account</h1>
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
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <button className="w-full h-[45px] border bg-[#A62F03] text-white rounded">
                    Registion
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
