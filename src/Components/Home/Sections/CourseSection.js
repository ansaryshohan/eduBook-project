import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from '../../SingleCourse/SingleCourse';

const CourseSection = () => {
  const [userdata,setUserdata]=useState([])

  useEffect(()=>{
    fetch('https://e-learnign-server.vercel.app/courses/2')
    .then(res=>res.json())
    .then(data=>setUserdata(data))
  },[])
 
  const threeData= userdata.filter(user=> user.id<4);

  return (
    <div className=' pb-8 mb-10'>

      <h1 className='text-center mt-12  text-5xl font-bold'>Our Popular Courses</h1>
      <div className="divider mb-20 w-5/12 mx-auto"></div>
     <div className='lg:grid sm:flex  sm:justify-center sm:items-center lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:w-10/12 mx-auto pb-36 '>
      {
        threeData.map(course=><SingleCourse
        key={course.id}
        course={course}></SingleCourse> )
      }
     </div>
     <Link to='/courses'>
    <div className='flex justify-center'>
    <button className="btn btn-accent text-2xl font-bold  w-72 mx-28">View ALL COURSES</button>
    </div>
     </Link>
    </div>
  );
};

export default CourseSection;