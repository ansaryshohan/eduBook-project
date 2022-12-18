import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const datas= useLoaderData();
  const {title} =datas;
  return (
    <div className=' border border-green-300 w-2/3 mx-auto rounded-lg shadow-lg grid place-items-center mt-40 mb-40 p-11'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p>thanks for buying</p>
    </div>
  );
};

export default Checkout;