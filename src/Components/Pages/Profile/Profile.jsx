import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollRestoration } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
    setName(user.displayName || "");
    setImage(user.photoURL || "");
  }, [user]);

  const is_valid_image_url = async (url) => {
    const isValidFormat = /\.(png|jpg|jpeg|gif|svg)$/i.test(url);
    return isValidFormat;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const isValidImage = await is_valid_image_url(image);

    if (name === "" || image === "") {
      toast.error("Input fields must not be empty.");
    } else if (!isValidImage) {
      toast.error("Image must be .png, .jpg, .gif, .svg");
    } else {
      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: image,
        });
        toast.success("Account updated successfully.");
      } catch (error) {
        toast.error("Something went wrong.");
        console.error("Error updating profile:", error);
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        data-aos="zoom-in-up"
        className="flex justify-center mt-10 px-10 mb-10 md:mb-20"
      >
        <ScrollRestoration />
        <Helmet>
          <title>Residence-Profile</title>
        </Helmet>

        <div className="max-w-[1050px]">
          <div className="grid grid-cols-12 h-[593px] md:h-[440px] border rounded-2xl">
            <div className="col-span-12 md:col-span-6 relative">
              <img
                className="rounded-t-2xl md:rounded-r-none md:rounded-l-2xl object-cover h-[300px] md:h-[440px]"
                src={user.photoURL}
                alt=""
              />
              <div className="absolute bottom-0 flex justify-left pl-5 bg-[#A62F03] md:bg-[#a62e03b7] w-full text-white py-2 font-bold rounded-bl-none md:rounded-bl-xl">
                <div className="text-[14px] md:text-[16px]">
                  <h1>Name : {user.displayName}</h1>
                  {user.email && <h2>Email : {user.email}</h2>}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 px-5 pt-0 md:pt-[90px]">
              <form onSubmit={handleUpdate} className="mt-2 md:mt-0">
                <div className="">
                  <div>
                    <h1 className="text-[30px] mb-5">Update Profile</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      className="border pl-4 outline-none rounded h-[45px] w-full"
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="border pl-4 outline-none rounded h-[45px] w-full"
                      type="text"
                      placeholder="Enter Your Photo Url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <button className="w-full h-[45px] border bg-[#A62F03] text-white rounded">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
