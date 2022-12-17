import React from 'react';
import { Outlet } from 'react-router-dom';
import AllCategories from '../Components/CoursesComponent/Categories/AllCategories';

const CoursesLayout = () => {
  return (
    <div className='md:grid md:grid-cols-4'>
      <div className='md:col-span-1'> 
           <AllCategories></AllCategories>
      </div>
      <div className='md:col-span-3 md:pr-3'>
         <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default CoursesLayout;