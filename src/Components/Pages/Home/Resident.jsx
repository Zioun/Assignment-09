import React from "react";

const Resident = () => {
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
                    Featured
                  </h1>
                </div>
                <div className="flex gap-5">
                  <h1 className="bg-[#A62F03] text-white px-3 rounded">
                    Fore Sale
                  </h1>
                  <h1 className="bg-[#A62F03] text-white px-3 rounded">
                    Active
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div>
              <h1 className="text-[20px] font-bold mt-3">
                Bilocale in affitto in via Giacinta Pezzana
              </h1>
              <p className="text-[#A62F03] font-bold my-1">850 € / mese</p>
              <p className="text-[14px]">
                Parioli Muse Delizioso Appartamento arredato. Nelle immediate
                vicinanze di Piazzale delle …
              </p>
            </div>
            <div className="flex gap-5 py-2">
              <span>1</span>
              <span>2</span>
              <span>52m2</span>
            </div>
            <div>
              <button className="mb-3 py-2 px-10 border bg-[#A62F03] text-white rounded">
                Details
              </button>
              <hr className="mb-3" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Resident;