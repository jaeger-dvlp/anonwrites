import React from 'react';

export default function LoadingWrite() {
  return (
    <div className="w-full transition-all duration-300 justify-center flex flex-wrap">
      <div className="write m-2 my-10 xl:w-1/2 lg:w-1/2 flex flex-wrap overflow-hidden justify-center content-start rounded-xl md:w-1/2 w-full bg-gray-800 p-0">
        <div className="write-header w-full flex flex-wrap border-b border-gray-900 p-5">
          <div className="w-1/3 h-full bg-gray-700 rounded-lg p-5 animate-pulse " />
        </div>
        <div className="write-content w-full p-5">
          <div className="w-full h-32 bg-gray-700 rounded-lg p-5 animate-pulse " />
        </div>
        <div className="write-footer text-right flex justify-end w-full border-t border-gray-900 p-5">
          <div className="w-1/4 h-full bg-gray-700 rounded-lg p-5 animate-pulse " />
        </div>
      </div>
    </div>
  );
}
