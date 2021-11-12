import React from 'react';

export default function Popup() {
  return (
    <div className="w-full visible opacity-1 flex flex-wrap justify-center content-center transition-all duration-300 h-full fixed top-0 left-0 bg-black bg-opacity-50">
      <div className="container mx-auto p-0 m-0">
        <div className="w-full flex flex-wrap justify-center content-center p-5">
          <div
            data-aos="fade-down"
            className="xl:w-1/3 lg:w-1/2 w-full h-20 bg-gray-800 rounded-xl text-white p-5 shadow-xl"
          >
            Test
          </div>
        </div>
      </div>
    </div>
  );
}
