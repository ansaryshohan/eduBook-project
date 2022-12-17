import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategories = ({singleCategory}) => {
  const { category, id } = singleCategory;
  // console.log(singleCategory)

  return (
    <div>
      <div className="grid mb-1 mx-auto w-10/12 h-20 rounded-xl bg-accent text-primary-content place-content-center text-center text-xl font-medium p-5">
        <Link to={`/courses/${id}`}>
          {category}
        </Link>
      </div>

    </div>
  );
};

export default SingleCategories;