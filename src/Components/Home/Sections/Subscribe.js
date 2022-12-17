import React from 'react';
import '../SectionCssFiles/subscribe.css'

const Subscribe = () => {
  return (
    <div>
    <div className="min-h-[600px] bg-base-200 mt-20
    grid grid-cols-2 w-10/12 mx-auto">
      <div className='subscribe-img p-10  rounded-lg overflow-hidden'></div>
      <div className='p-6 flex flex-col items-center justify-center gap-3 '>
        <h1 className='text-2xl lg:text-3xl font-semibold lg:text-center lg:px-3'>Committed to educating and nurturing the students</h1>

        <p className='lg:px-10 text-justify'>Get update from us by subscribing to our website.We will stay connected through the social presence.Submit your email here.</p>
        <form 
        className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
        onSubmit={(e)=>e.preventDefault()}>
          <input
            placeholder="Email"
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 text-gray-500 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
          />
          <button 
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-purple-900 bg-[#00858F] hover:bg- focus:shadow-outline focus:outline-none"
          >
              
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Subscribe;