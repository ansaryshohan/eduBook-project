import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../../SingleCourse/SingleCourse';

const GroupCourses = () => {
  const courseData = useLoaderData();
  // console.log(courseData);
  return (
    <div className='lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-7 md:grid md:grid-cols-2 md:gap-5 sm:flex sm:flex-col sm:justify-center  sm:gap-7 sm:p-8 mt-8 md:pr-3 '>
     {
      courseData.map(course=><SingleCourse
      key={course.id}
      course={course}></SingleCourse>)
     }
    </div>
  );
};

export default GroupCourses;