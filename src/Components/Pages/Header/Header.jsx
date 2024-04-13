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
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <div className="px-10 py-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-3">
              <img src={logo} alt="logo" />
              <div className="font-bold text-[22px] leading-[23px]">
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
            <div className="flex join-item gap-5">
              <div className="flex items-center gap-3 font-bold text-[16px]">
                <span className="text-[#A62F03]">
                  <FaPhoneAlt />
                </span>
                <p>+880 161-997-1997</p>
              </div>
              <div className=""></div>
              <div
                className="dropdown dropdown-end tooltip tooltip-bottom"
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
                  className="mt-3 z-[3] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-[#A62F03] font-semibold border"
                >
                  <Link to="/profile">
                  <li>
                    <p className="flex justify-between">
                      <span>Profile</span>
                    </p>
                  </li>
                  </Link>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
