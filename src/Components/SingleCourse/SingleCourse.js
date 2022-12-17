import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
  const { id, title, category, price, image, rating, description } = course;
  // console.log(course)

  return (
    <div className='h-[520px]'>
      <div className="card w-4/5 h-full bg-base-100 shadow-xl mx-auto sm:mb-6">
        <figure><img src={image} alt="Shoes" className='h-60 w-full  object-cover' /></figure>
        <div className="card-body pb-3 pt-7 px-7">
          <h2 className="card-title relative">
            {title}
            <div className="badge badge-secondary absolute right-[-10px] top-[-15px] ">NEW</div>
          </h2>
          <p>{description.slice(0, 80)}...</p>
          <h1><small className='text-sm font-semibold'>Category: {category}</small></h1>

          <div className="card-actions justify-between mt-2">

            <div className="text-lg font-semibold text-orange-400">
              Price: <span className='text-xl text-orange-600'>{price}  $</span>
            </div>

            <div className="flex justify-evenly items-center gap-2">
              <div><FaStar className='text-orange-300' /></div>
              <div className='text-orange-400'>{rating.rate}</div>
            </div>

          </div>
        </div>
        <Link to={`/course/${id}`}>
          <button className="btn btn-accent w-full text-xl font-semibold text-white">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;