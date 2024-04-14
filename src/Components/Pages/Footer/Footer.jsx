import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div data-aos="fade-zoom-in" className="bg-[#181D24] mt-auto">
      <div className="p-10 container m-auto text-white gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className=" md:flex md:flex-col md:items-center ">
          <h6 className="text-white font-semibold text-[16px] mb-2">WSP RESIDENCE</h6>
          <div className="rounded-full">
            <img className="p-2 w-[70px]" src="https://i.ibb.co/7Qy73qw/footer-logo.png" alt="" />
          </div>
          <p className="text-[#7A7A7A] md:text-center max-w-[300px]">Your gateway to modern living, offering luxury amenities and contemporary design in a prime location.</p>
        </div>
        <div className=" md:flex md:flex-col md:items-center ">
          <h6 className="text-white font-semibold text-[16px] mb-2">Pages</h6>
          <Link to="/about"><p className="link link-hover">About</p></Link>
          <Link to="/contact-us"><p className="link link-hover">Contact Us</p></Link>
          <Link to="/details/001"><p className="link link-hover">Details</p></Link>
          <Link to="/profile"><p className="link link-hover">Profile</p></Link>
        </div>
        <div className=" md:flex md:flex-col md:items-center ">
          <h6 className="text-white font-semibold text-[16px] mb-2">Contact</h6>
          <div className="flex items-center gap-2">
            <span><FaRegBuilding /></span>
            <a className="link link-hover"> 3755 Commercial St SE Salem</a>
          </div>
          <div className="flex items-center gap-2">
            <span><FaPhoneAlt /></span>
            <a className="link link-hover">(305) 555-4446</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[18px]"><MdOutlineEmail /></span>
            <a className="link link-hover">wspresidence@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[18px]"><FaSkype /></span>
            <a className="link link-hover">wsresidence</a>
          </div>
        </div>
        <div className=" md:flex md:flex-col md:items-center">
          <h6 className="text-white font-semibold text-[16px] mb-2">Social</h6>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><FaFacebookF /></span>
            </div>
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><FaXTwitter /></span>
            </div>
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><FaWhatsapp /></span>
            </div>
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><FaTiktok /></span>
            </div>
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><SlSocialDribbble /></span>
            </div>
            <div className="rounded flex bg-[#101419] justify-center p-2">
              <span className="text-[25px] text-white cursor-pointer"><SlSocialLinkedin /></span>
            </div>
           
          </div>
        </div>
      </div>
      <div className="bg-[#101419]">
        <div className="flex flex-col md:flex-row justify-between container m-auto py-5 text-white px-5">
            <div>
              <p className="text-[#7A7A7A]">Copyright. All Rights Reserved.</p>
            </div>
            <div className="flex gap-5 my-1 md:my-0 ">
              <p className="text-[#7A7A7A]">Terms of Use</p>
              <p className="text-[#7A7A7A]">Privacy Policy</p>
            </div>
      </div>
      </div>
    </div>
    
  );
};

export default Footer;
