import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    console.log(createUser);
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mt-10 px-10 mb-20">
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
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Image URL"
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Password"
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
