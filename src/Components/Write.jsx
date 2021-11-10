/* eslint-disable react/prop-types */
import React from 'react';

export default function Write(props) {
  const { author, content, time } = props;
  return (
    <div className="w-full font-pop transition-all duration-300 justify-center flex flex-wrap">
      <div className="write transition-all duration-300 m-2 my-10 xl:w-1/2 lg:w-1/2 flex flex-wrap overflow-hidden justify-center content-start rounded-xl md:w-1/2 w-full bg-gray-800 p-0">
        <div className="write-header w-full text-lg border-b transition-all duration-300 border-gray-900 p-5">
          {author}
        </div>
        <div className="write-content text-md w-full font-light transition-all duration-300 p-5">
          {content}
        </div>
        <div className="write-footer text-gray-500 text-right transition-all duration-300 w-full border-t border-gray-900 p-5">
          {time}
        </div>
      </div>
    </div>
  );
}
