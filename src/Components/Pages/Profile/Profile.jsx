import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");

    if (name === "" || image === "") {
      toast.error("Input fields must not be empty.");
    } else {
      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: image
        });
        toast.success("Account updated successfully.");
      } catch (error) {
        toast.error("Something went wrong.");
        console.error("Error updating profile:", error);
      }
    }
  };

  return (
    <div className="flex justify-center mt-10 px-10 mb-20">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="max-w-[1050px]">
        <div className="grid grid-cols-12 h-[440px]">
          <div className="col-span-6 rounded-2xl">
            <img
              className="rounded-l-2xl h-[440px]"
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="col-span-6 border rounded-r-2xl px-5 pt-[90px]">
            <form onSubmit={handleUpdate} className="">
              <div className="">
                <div>
                  <h1 className="text-[30px] mb-5">Update Your Profile</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                  <input
                    className="border pl-4 outline-none rounded h-[45px] w-full"
                    type="text"
                    placeholder="Enter Your Photo Url"
                    name="image"
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
  );
};

export default Profile;
