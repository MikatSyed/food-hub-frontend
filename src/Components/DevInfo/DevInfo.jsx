import React from 'react';

const DevInfo = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About the Developer
            </h2>
            <p className="mt-3 text-xl text-gray-500">
              Hi, I'm John Doe, a passionate and experienced full-stack developer.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Educational Background</h3>
                <p className="mt-2 text-gray-500">
                  I hold a Bachelor's degree in Computer Science from the University of Somewhere. I've also completed various online courses and certifications to keep my skills up-to-date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Experience</h3>
                <p className="mt-2 text-gray-500">
                  I have over 5 years of experience as a full-stack developer, working on a wide range of projects for clients in various industries. I'm proficient in technologies like React, Node.js, Express, and Tailwind CSS.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Technologies</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Express
                  </span>
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    MongoDB
                  </span>
                  <span className="bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/500x500"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
