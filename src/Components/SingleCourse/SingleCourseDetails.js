import React from 'react';
import { FaRegArrowAltCircleRight, FaStar, FaUserGraduate } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourseDetails = () => {
  const courseData = useLoaderData();
  const { id, title, description, price, image, rating, bullet_Points } = courseData;

  
  return (
    <div className='lg:grid lg:grid-cols-4 lg:w-9/12 mx-auto mt-4'>

      {/* description section of the page */}
      <div className='lg:col-span-3 p-10'>
      

        <h1 className=' text-3xl font-semibold text-center mb-16 text-success'>{title}</h1>

        {/* pdf generator div button */}
    

          {/* pdf generator button ends here.. */}
        <p className=' text-2xl font-semibold text-success'>Course Details :</p>
        <hr className='w-40 mb-2' />
        <p className='text-xl mb-8 '>{description}</p>

        <div className='border border-slate-200 rounded-md p-6 shadow-md'>
          <h1 className=' text-2xl font-semibold text-success'>What you will learn here :</h1>
          <hr className='w-1/3 mb-2' />
          {
            bullet_Points.map((bullet, idx) => {
              return <li key={idx} className="flex items-center text-xl">
                <div className="mr-2">
                  <FaRegArrowAltCircleRight className='font-medium text-gray-800' />
                </div>
                <p className="font-medium text-gray-800">{bullet}</p>
              </li>
            })
          }
        </div>
        <p className=' text-2xl font-semibold text-success mt-8'>Requirements :</p>
        <hr className='w-40 mb-5' />
        <li className="flex items-center text-xl">
          <div className="mr-2">
            <FaRegArrowAltCircleRight className='font-medium text-gray-800' />
          </div>
          <p className="font-medium text-gray-800">To push through all of your expectations and understanding of this reality and who you are</p>
        </li>
        <li className="flex items-center text-xl">
          <div className="mr-2">
            <FaRegArrowAltCircleRight className='font-medium text-gray-800' />
          </div>
          <p className="font-medium text-gray-800">Work through the video content, written Lectures, and recordings with patience, for your mind to understand</p>
        </li>
        <li className="flex items-center text-xl">
          <div className="mr-2">
            <FaRegArrowAltCircleRight className='font-medium text-gray-800' />
          </div>
          <p className="font-medium text-gray-800">To use this information as a platform for you to be empowered into your greater knowing</p>
        </li>
      </div>

      {/* sticky card navbar */}
      <div className='lg:col-span-1 p-8'>
        <div className="card w-96 bg-base-100 shadow-xl sticky top-10">
          <figure><img src={image} alt="Shoes" className='h-60 w-full  object-cover' /></figure>
          <div className="card-body pb-3 pt-7 px-7">
            <div className="text-xl font-semibold text-success px-3">
              Price: <span className='text-2xl text-success'>{price}  $</span>
            </div>
            <h1 className='px-3'><small className='text-base font-semibold'>{title}</small></h1>

            <div className="card-actions justify-between mt-2 px-4">

              <div className="flex justify-evenly items-center gap-2">
                <div><FaStar className='text-orange-300' /></div>
                <div className='text-orange-400'>{rating.rate}</div>
              </div>
              <div className="flex justify-evenly items-center gap-2">
                <div><FaUserGraduate className='text-orange-300' /></div>
                <div className='text-orange-400'>{rating.count}</div>
              </div>
            </div>
            <Link to={`/course/${id}`}>
              <button className="btn btn-success w-full text-xl font-semibold text-white">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetails;