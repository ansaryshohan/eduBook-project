import React from 'react';
import '../SectionCssFiles/BannerSection.css'

const BannerSection = () => {
  return (
       <div  className='w-fit h-screen'>
      <div className='banner flex justify-center items-center flex-col text-center '>
     
      <h1 className='text-6xl lg:text-7xl font-bold text-[#BFD7FF]'> School for 
        <br />
      <span className='font-semibold '>Supreme Learning</span>
      </h1>
      <h3 className='text-2xl lg:text-3xl mt-2 font-semibold text-[#BFD7FF]'> A simply amazing opportunity to gain knowledge.</h3>

      </div>
    </div>
  );
};

export default BannerSection;