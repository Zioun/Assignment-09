import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollRestoration } from "react-router-dom";
const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="flex justify-center mt-10 px-5 mb-10 md:mb-20"
    >
      <ScrollRestoration />
      <Helmet>
        <title>WSP_Residence-Contact_Us</title>
      </Helmet>
      <div className="max-w-[1050px]">
        <div className="grid grid-cols-12 md:h-[750px]">
          <div className="col-span-6 hidden md:block rounded-2xl">
            <img
              className="rounded-l-2xl h-full object-cover"
              src="https://i.ibb.co/WW0NrT4/city-contact3.jpg"
              alt=""
            />
          </div>
          <div className="col-span-12 md:col-span-6 border rounded-2xl md:rounded-r-2xl px-5 pt-5 md:pt-[90px]">
            <form onSubmit={handleContact} className="">
              <div className="">
                <div>
                  <h1 className="text-[30px] mb-2">
                    Get in touch with us to plan your next transaction
                  </h1>
                  <p className="text-[#696969] mb-10">
                    Our experts and developers would love to contribute their
                    expertise and insights and help you today.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 ">
                  <div className="w-full">
                    <h2 className="text-[#7a7a7a] text-[13px] mb-1">
                      First name*
                    </h2>
                    <input
                      className="pl-4 text-[14px] outline-none rounded h-[40px] bg-[#F8F9FA] w-full"
                      type="text"
                      placeholder="Frist Name"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="text-[#7a7a7a] text-[13px] mb-1">
                      Last name*
                    </h2>
                    <input
                      className="pl-4 text-[14px] outline-none rounded h-[40px] bg-[#F8F9FA] w-full"
                      type="email"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3  mt-5">
                  <div className="w-full">
                    <h2 className="text-[#7a7a7a] text-[13px] mb-1">Email*</h2>
                    <input
                      className="pl-4 text-[14px] outline-none rounded h-[40px] bg-[#F8F9FA] w-full"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="text-[#7a7a7a] text-[13px] mb-1">Mobile</h2>
                    <input
                      className="pl-4 text-[14px] outline-none rounded h-[40px] bg-[#F8F9FA] w-full"
                      type="number"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <div className="w-full">
                    <h2 className="text-[#7a7a7a] text-[13px] mb-1">Message</h2>
                    <textarea
                      placeholder="Message"
                      className="bg-[#F8F9FA] resize-none w-full outline-none p-3 text-[14px]"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <button className="w-full mb-5 md:mb-0 h-[45px] border bg-[#A62F03] text-white rounded mt-3">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
