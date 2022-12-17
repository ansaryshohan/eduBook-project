import React, { useEffect, useState } from 'react';
import SingleCategories from './SingleCategories';

const AllCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://e-learnign-server.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  // console.log(categories);

  return (

    <div className='mt-6 sticky top-32'>
      {
        categories?.map(singleCategory => <SingleCategories
          key={singleCategory.id}
          singleCategory={singleCategory}></SingleCategories>)
      }
    </div >
  );;
};

export default AllCategories;