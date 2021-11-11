/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Write(props) {
  const { author, content, time, categories } = props;
  return (
    <div className="w-full font-pop transition-all duration-300 justify-center flex flex-wrap">
      <div
        className="w-full transform flex justify-center p-0 m-0"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="700"
      >
        <div className="writes shadow-xl transform hover:scale-105 border border-gray-900 transition-all duration-300 m-2 my-10 xl:w-1/2 lg:w-1/2 flex flex-wrap overflow-hidden justify-center content-start rounded-xl md:w-1/2 w-full bg-gray-800 p-0">
          <div className="write-header text-gray-300 w-full text-lg border-b transition-all duration-300 border-gray-900 p-5">
            {author}
          </div>
          <div className="write-content text-gray-300 text-md w-full font-light transition-all duration-300 p-5">
            {content}
          </div>
          <div className="write-footer text-gray-500 flex flex-wrap transition-all duration-300 w-full border-t border-gray-900 p-0">
            <div className="write-categories  flex flex-wrap w-full p-3">
              {categories.map((category) => (
                <div className="p-2">
                  <button
                    type="button"
                    className={`py-2 px-5 text-sm rounded-md bg-opacity-20 hover:bg-opacity-30 transition-all duration-150 ${
                      category === 'world'
                        ? 'text-blue-500 bg-blue-500'
                        : category === 'war'
                        ? 'text-green-500 bg-green-500'
                        : category === 'politic'
                        ? 'text-red-500 bg-red-500'
                        : ''
                    }`}
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>
            <div className="p-5 float-right hidden">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
