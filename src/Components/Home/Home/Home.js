import React from 'react';
import BannerSection from '../Sections/BannerSection';
import CourseSection from '../Sections/CourseSection';
import Subscribe from '../Sections/Subscribe';

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <CourseSection></CourseSection>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;