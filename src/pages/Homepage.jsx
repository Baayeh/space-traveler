import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section className="homepage">
      <div className="img-bg w-full h-screen relative">
        <div className="overlay absolute w-full h-screen bg-black opacity-60" />
        <div className="img-text text-white relative z-40">
          <h1 className="text-[7rem] font-extrabold leading-none">
            Explore
            {' '}
            <br />
            {' '}
            the
            {' '}
            <span className="text-orange-500 underline">universe</span>
            <br />
            {' '}
            with us!!
          </h1>
          <p className="text-xl w-[85%] p-2 font-light">
            How about we embark on a journey through the vast expanse of space
            and make unforgettable memories?
          </p>
          <div className="home-action mt-5">
            <button
              type="button"
              onClick={() => navigate('/rockets')}
              className="border border-orange-500 text-orange-500 font-bold rounded-full p-3 uppercase tracking-widest w-[15rem] hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              Let&apos;s roll
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
