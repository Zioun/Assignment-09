import React from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Resident = ({resident}) => {
    const {id, estate_title, status, area, description, price, segment_name, location} = resident;
    const desc = description.length > 80 ? description.slice(0, 80) : description;
  return (
      <div className="col-span-4">
        <div className="bg-white shadow-md rounded overflow-hidden ">
          <div
            className="hero-overlay overflow-hidden bg-opacity-60 h-[225px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/v30nY3z/decor-7-525x328.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-10">
              <div className="text-[13px] flex justify-between px-5 pt-2">
                <div>
                  <h1 className="bg-[#262525] text-white px-3 rounded">
                    {segment_name}
                  </h1>
                </div>
                <div className="flex gap-5">
                  <h1 className="bg-[#A62F03] text-white px-3 rounded">
                    Fore {status}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div>
              <h1 className="text-[20px] font-bold mt-3">
                {estate_title}
              </h1>
              <p className="text-[#A62F03] font-bold my-1">{price}</p>
              <p className="text-[14px]">
                {desc}....
              </p>
            </div>
            <div className="flex gap-5 py-2">
                <div className="flex justify-center items-center gap-2">
                    <CiLocationArrow1 className="text-[20px]"/>
                    <span>{location.city}, {location.state}</span>
                </div>
              <div className="flex items-center gap-2 justify-center">
                <span><SlSizeFullscreen /></span>
                <span>{area}</span>
              </div>
              
            </div>
            <div>
              <Link to={`/details/${id}`}><button className="mb-3 py-2 px-10 border bg-[#A62F03] text-white rounded">
                Details
              </button></Link>
              <hr className="mb-3" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Resident;
