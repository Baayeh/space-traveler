import React from 'react';

const Homepage = () => (
  <section className="min-h-screen bg-banner-img bg-cover bg-no-repeat relative">
    <div className="absolute w-full h-screen bg-black opacity-60" />

    <div className="absolute z-20 sm:w-[70%] xl:w-[50%] text-balance top-[15rem] left-[2rem] sm:left-[3rem]">
      <h1 className="text-5xl sm:text-7xl xl:text-[5rem] font-bold">
        Explore
        {' '}
        <div>
          the
          {' '}
          <span className="text-orange-500 underline">universe</span>
          {' '}
          with
          us!
        </div>
      </h1>
      <p className="text-2xl sm:text-3xl lg:text-2xl w-[85%] p-2 font-light text-slate-300">
        How about we embark on a journey through the vast expanse of space and
        make unforgettable memories?
      </p>
    </div>
  </section>
);

export default Homepage;
