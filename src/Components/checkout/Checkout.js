import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const datas= useLoaderData();
  console.log(datas);
  return (
    <div>
      <h1>this is the checkout</h1>
    </div>
  );
};

export default Checkout;