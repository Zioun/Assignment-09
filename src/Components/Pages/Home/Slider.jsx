// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
       <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(https://i.ibb.co/d0bd2WK/couch-1920x790.jpg)'}}>
            <div className='hero-overlay bg-opacity-55'>
              <div className='text-white px-[200px] py-40'>
                <p>$3,280</p>
                <h1 className='text-[45px] font-bold'>Slider Title Name</h1>
                <div className='flex gap-5 my-3'>
                  <p>1 LeTTi</p>
                  <p>3Bagan</p>
                  <p>63M2</p>
                </div>
                <p className='max-w-[900px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum deserunt quia necessitatibus, amet facere expedita quisquam aspernatur sit corporis quasi consequuntur voluptatum reprehenderit fugit aperiam distinctio, quo repudiandae hic fuga odit iste magni voluptas? Ad provident sapiente dolore doloremque mollitia, obcaecati, quae voluptate saepe veritatis eos nisi dolorum, illo modi?</p>
                <button className='bg-[#A62F03] px-[100px] py-[10px] rounded mt-5'>Details</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(https://i.ibb.co/d0bd2WK/couch-1920x790.jpg)'}}>
            <div className='hero-overlay bg-opacity-55'>
              <div className='text-white px-[200px] py-40'>
                <p>$3,280</p>
                <h1 className='text-[45px] font-bold'>Slider Title Name</h1>
                <div className='flex gap-5 my-3'>
                  <p>1 LeTTi</p>
                  <p>3Bagan</p>
                  <p>63M2</p>
                </div>
                <p className='max-w-[900px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum deserunt quia necessitatibus, amet facere expedita quisquam aspernatur sit corporis quasi consequuntur voluptatum reprehenderit fugit aperiam distinctio, quo repudiandae hic fuga odit iste magni voluptas? Ad provident sapiente dolore doloremque mollitia, obcaecati, quae voluptate saepe veritatis eos nisi dolorum, illo modi?</p>
                <button className='bg-[#A62F03] px-[100px] py-[10px] rounded mt-5'>Details</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(https://i.ibb.co/d0bd2WK/couch-1920x790.jpg)'}}>
            <div className='hero-overlay bg-opacity-55'>
              <div className='text-white px-[200px] py-40'>
                <p>$3,280</p>
                <h1 className='text-[45px] font-bold'>Slider Title Name</h1>
                <div className='flex gap-5 my-3'>
                  <p>1 LeTTi</p>
                  <p>3Bagan</p>
                  <p>63M2</p>
                </div>
                <p className='max-w-[900px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum deserunt quia necessitatibus, amet facere expedita quisquam aspernatur sit corporis quasi consequuntur voluptatum reprehenderit fugit aperiam distinctio, quo repudiandae hic fuga odit iste magni voluptas? Ad provident sapiente dolore doloremque mollitia, obcaecati, quae voluptate saepe veritatis eos nisi dolorum, illo modi?</p>
                <button className='bg-[#A62F03] px-[100px] py-[10px] rounded mt-5'>Details</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
    );
};

export default Slider;