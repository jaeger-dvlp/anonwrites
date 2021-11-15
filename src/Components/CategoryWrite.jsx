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
          if (data[0].categories.includes(categoryName) !== true) {
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
      className={`w-full font-pop ${
        catStatus === true ? 'opacity-1 visible' : 'opacity-0 invisible'
      } flex flex-wrap justify-center content-center transition-all duration-300 h-full fixed top-0 left-0 bg-black bg-opacity-50`}
    >
      <div className="container mx-auto p-0 m-0">
        <div className="w-full flex flex-wrap justify-center content-center p-5">
          <div
            data-aos="fade-down"
            className="xl:w-1/3 lg:w-1/2 w-full bg-gray-800 rounded-xl text-white p-0 shadow-xl"
          >
            <div className="popupHeader w-full flex flex-wrap justify-center content-center p-4 border-b border-gray-900">
              <div className="p-3 bg-red-500 fill-current text-red-500 bg-opacity-30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" />
                </svg>
              </div>
            </div>
            <div className="w-full text-center flex flex-wrap justify-center content-center p-5">
              Looks like this category is doesn&apos;t exist.
            </div>
            <div className="w-full flex flex-wrap justify-center content-center p-5">
              <Link
                to="/"
                className="px-5 py-2 hover:bg-opacity-60 rounded-lg bg-gray-500 text-gray-300 bg-opacity-30"
                type="button"
              >
                Okay.
              </Link>
            </div>
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
