/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryWrite({ match }) {
  const categoryName = match.params.name;
  const [catStatus, setCatStatus] = useState(null);

  const notFound = (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="700"
      className="w-full flex flex-wrap justify-center content-center font-pop text-gray-300 p-3 m-0"
    >
      <div className="write m-2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-wrap overflow-hidden justify-center content-start rounded-xl bg-gray-800 p-0">
        <div className="write-content w-full p-0">
          <div className="w-full text-center flex justify-center content-center p-5 border-b border-gray-900">
            <span className="p-2 px-5 overflow-hidden shadow-lg text-xl fill-current flex flex-wrap rounded-md justify-center content-center bg-red-500 text-red-500 bg-opacity-40">
              Not Found
            </span>
          </div>
          <div className="w-full justify-center content-center flex flex-wrap p-5">
            <span className="w-full text-center text-2xl py-5">Oops.</span>
            <span className="w-full text-center text-lg pb-5 font-light">
              Looks like this category is doesn&apos;t exist.
            </span>
          </div>
          <div className="w-full text-lg  border-t border-gray-900 text-center flex flex-wrap justify-center content-center p-7">
            <Link className="text-gray-400 hover:text-gray-200" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  fetch('http://172.16.17.88:3050/getCategories', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.includes(categoryName) !== true) {
        setCatStatus(true);
      }
    });

  return (
    <div className="py-32 text-white text-center w-full">
      {catStatus === true ? notFound : categoryName}
    </div>
  );
}
