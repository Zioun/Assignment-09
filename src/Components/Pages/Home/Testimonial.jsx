import React from "react";
import scrolling from "../../../assets/scrolling.gif";
const Testimonial = () => {
  return (
    <>
    <div className="my-20 px-5">
      <div className="text-center">
        <h1 className='font-semibold text-[#A62F03]'>Reviews</h1>
        <h1 className="text-[40px]">Our Clients Reviews</h1>
        <p className="max-w-[700px] text-[16px] m-auto mb-10 mt-3 text-[#7A7A7A] font-normal">Discover a wealth of insights from our community's diverse reviews. From gadgets to getaways, books to bites, our platform offers honest opinions to inform your decisions. Join the conversation, share your experiences, and navigate the world of possibilities with confidence</p>
      </div>
      <div className="h-[1000px] md:h-[800px] lg:h-80 w-full carousel carousel-vertical">
        <div className="carousel-item h-full w-full container m-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <img className="rounded-2xl border bg-[#A62F03] lg:w-[300px] h-full object-cover" src="https://i.ibb.co/gjt5fdS/cccccc-removebg-preview.png" />
            <div className="">
                <h1 className="text-[#A62F03] text-[30px] font-semibold">James Smith</h1>
                <h2 className="text-[#7A7A7A] italic py-1">April 2, 2022</h2>
                <p className="border-l-[7px] px-5 py-5 bg-[#7e7e7e0e] border-[#A62F03] text-[#181D24] mt-1">WSP Residence offers an unparalleled living experience. From the moment I entered the lobby, I felt welcomed by the friendly staff. The apartment itself was spacious and elegantly furnished, with all the amenities one could ask for. The fitness center and pool were fantastic additions, allowing me to maintain my active lifestyle without leaving the building. The location was also ideal, with easy access to public transportation and nearby attractions. Overall, I couldn't be happier with my stay at WSP Residence. It truly felt like a home away from home.</p>
            </div>
          </div> 
        </div>
        <div className="carousel-item h-full w-full container m-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <img className="rounded-2xl border bg-[#A62F03] lg:w-[300px] h-full object-cover" src="https://i.ibb.co/WK70xJ2/neil-degrasse-tyson-removebg-preview.png" />
            <div className="">
                <h1 className="text-[#A62F03] text-[30px] font-semibold">Michael Johnson</h1>
                <h2 className="text-[#7A7A7A] italic py-1">January 14, 2015</h2>
                <p className="border-l-[7px] px-5 py-5 bg-[#7e7e7e0e] border-[#A62F03] text-[#181D24] mt-1">I recently relocated to the city and chose WSP Residence as my new home. It was the best decision I could have made. The apartment exceeded my expectations in every way, from the sleek modern design to the stunning views of the surrounding skyline. The building amenities, including the rooftop terrace and concierge service, made my transition seamless and stress-free. The staff went above and beyond to ensure that I felt comfortable and welcomed. I've already recommended WSP Residence to several friends and colleagues looking for a place to live in the city.</p>
            </div>
          </div> 
        </div>
        <div className="carousel-item h-full w-full container m-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <img className="rounded-2xl border bg-[#A62F03] lg:w-[300px] h-full object-cover" src="https://i.ibb.co/tHXLQZC/ccc-removebg-preview.png" />
            <div className="">
                <h1 className="text-[#A62F03] text-[30px] font-semibold">David Brown</h1>
                <h2 className="text-[#7A7A7A] italic py-1">March 23, 2011</h2>
                <p className="border-l-[7px] px-5 py-5 bg-[#7e7e7e0e] border-[#A62F03] text-[#181D24] mt-1">As a frequent traveler, I've stayed in many luxury residences around the world, but none have impressed me as much as WSP Residence. The attention to detail in every aspect of the property is evident from the moment you arrive. The apartment was beautifully appointed, with high-end finishes and state-of-the-art appliances. The on-site amenities, including the business center and conference rooms, made it easy for me to stay productive during my stay. The location was also perfect for exploring the city, with plenty of dining and entertainment options within walking distance. I'll definitely be returning to WSP Residence on my next visit to the city.</p>
            </div>
          </div> 
        </div>
        <div className="carousel-item h-full w-full container m-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <img className="rounded-2xl border bg-[#A62F03]  lg:w-[300px] h-full object-cover" src="https://i.ibb.co/Kw6smhW/gettyimages-187751114-removebg-preview.png" />
            <div className="">
                <h1 className="text-[#A62F03] text-[30px] font-semibold">Christopher Martinez</h1>
                <h2 className="text-[#7A7A7A] italic py-1">May 8, 2020</h2>
                <p className="border-l-[7px] px-5 py-5 bg-[#7e7e7e0e] border-[#A62F03] text-[#181D24] mt-1">As a frequent traveler, I've stayed in many luxury residences around the world, but none have impressed me as much as WSP Residence. The attention to detail in every aspect of the property is evident from the moment you arrive. The apartment was beautifully appointed, with high-end finishes and state-of-the-art appliances. The on-site amenities, including the business center and conference rooms, made it easy for me to stay productive during my stay. The location was also perfect for exploring the city, with plenty of dining and entertainment options within walking distance. I'll definitely be returning to WSP Residence on my next visit to the city.</p>
            </div>
          </div> 
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-[150px]" src={scrolling} alt="scrolling" />
      </div>
    </div>
    
  </>
    
  );
};

export default Testimonial;
