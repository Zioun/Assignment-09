import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import "animate.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then((result) => {
        toast.success("Account successfully logout.");
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Update Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div data-aos="fade-down" className="md:px-10 py-3 w-full shadow z-10">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-0"
              >
                <span className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[30px] w-[30px]"
                    stroke="#A62F03"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-3">
              <img
                className="w-[40px] h-[40px] md:w-[51px] md:h-[51px] object-cover"
                src={logo}
                alt="logo"
              />
              <div className="font-bold md:text-[22px] leading-5 md:leading-[23px]">
                <h1 className="text-[#A62F03] tracking-wide">WSP</h1>
                <h1 className="tracking-wide">Residence</h1>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5 px-1 text-[#A62F03] font-bold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center join-item gap-5">
              <div className="hidden xl:block">
                <div className="flex items-center gap-3 font-bold  text-[16px] ">
                  <span className="text-[#A62F03]">
                    <FaPhoneAlt />
                  </span>
                  <p>(305) 555-4446</p>
                </div>
              </div>
              <div
                className="dropdown dropdown-end tooltip tooltip-left md:tooltip-bottom z-10"
                data-tip={user && user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  {user && user ? (
                    <img
                      alt="User Profile"
                      src={user.photoURL}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 rounded-full">
                      <div className="ml-0 mt-0">
                        <span className="text-[40px] text-[#A62F03] cursor-pointer">
                          <CgProfile />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-[#A62F03] font-semibold border"
                >
                  {user && (
                    <Link to="/profile">
                      <li>
                        <p className="flex justify-between">
                          <span>Update Profile</span>
                        </p>
                      </li>
                    </Link>
                  )}

                  <li>
                    <Link to="/login">
                      {user && user ? (
                        <span onClick={handleLogout}>Logout</span>
                      ) : (
                        <span>Login</span>
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="md:btn text-white rounded btn-sm h-5 px-5 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]">
                <Link to="/login">
                  {user && user ? (
                    <span onClick={handleLogout}>Logout</span>
                  ) : (
                    <span>Login</span>
                  )}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
