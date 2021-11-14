/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import LoadingWrite from './LoadingWrite';
import Write from './Write';

export default function CategoryWrite({ history }) {
  const [catStatus, setCatStatus] = useState(null);
  const [writes, setWrites] = useState(null);
  useEffect(() => {
    const categoryName = history.match.params.name;
    const sendWritesByCategory = async () => {
      await fetch(`http://localhost:3050/getWrites/category/${categoryName}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setWrites(
            data.map((elm) => (
              <Write
                key={faker.datatype.uuid()}
                author={
                  faker.animal.type() +
                  faker.name.firstName() +
                  faker.datatype.number(120)
                }
                content={elm.writeContent}
                time={elm.writeTime}
                categories={elm.writeCategories}
              />
            ))
          );
          setCatStatus(false);
        })
        .catch((err) =>
          setTimeout(() => {
            sendWritesByCategory();
          }, 500)
        );
    };

    const controlCategory = async () => {
      await fetch('http://localhost:3050/getCategories', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.includes(categoryName) !== true) {
            setCatStatus(true);
          } else {
            sendWritesByCategory();
          }
        });
    };

    controlCategory();
  }, []);

  const notFound = (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="700"
      className="w-full flex text-center flex-wrap justify-center content-center font-pop text-gray-300 p-3 m-0"
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

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="py-32 px-5 container mx-auto flex flex-wrap"
    >
      {catStatus === true ? (
        notFound
      ) : catStatus === false ? (
        <>
          <div className="mx-auto p-0 m-0 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-wrap justify-start content-end">
            <Link
              data-aos="fade-in"
              data-aos-delay="100"
              to="/"
              className="hover:text-gray-300 w-full p-2 text-lg pb-0 text-gray-400"
            >
              Back
            </Link>
          </div>
          {[writes]}
        </>
      ) : (
        <LoadingWrite />
      )}
    </div>
  );
}
