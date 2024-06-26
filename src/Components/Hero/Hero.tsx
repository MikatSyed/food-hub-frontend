import React from 'react';

const Hero = () => {
    return (
        <div className=' sm:px-6 md:px-[7rem] mx-4 md:mx-0'>
              <div className="relative z-10 text-white  py-[8rem] ">
        <h1 className="text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
        <p className="text-xl mb-8">Find the perfect dish for any occasion</p>
        <div className="space-x-4 py-4">
          <button
           
            className="bg-[#22c55e] hover:bg-white text-white hover:text-[#22c55e] font-semibold py-3 px-7 rounded-full"
          >
            See Recipes
          </button>
          <button
           
            className="bg-white hover:bg-[#22c55e] text-[#22c55e] hover:text-white font-semibold py-3 px-7 rounded-full"
          >
            Add Recipes
          </button>
        </div>
      </div>
        </div>
    );
};

export default Hero;