/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context';

export default function NewWrite() {
  const { activatePopup } = useContext(Context);
  const [categories, setCategories] = useState(null);

  const [checkBoxes, setCheckBoxes] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3050/getCategories', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setCheckBoxes(
          data.map((category) => (
            <label
              key={`checkOf${category}`}
              htmlFor={`check${category}`}
              className="cursor-pointer pr-5 flex select-none flex-wrap text-sm text-gray-400 hover:text-gray-300 justify-start content-center"
            >
              <input
                id={`check${category}`}
                className="text-gray-500 w-4 h-4 mr-2 focus:border-0 focus:ring-4 focus:ring-opacity-20 focus:ring-offset-0  focus:ring-blue-400 border-0 ring-0 outline-none border-gray-600 bg-gray-500 self-center rounded"
                type="checkbox"
              />
              {category}
            </label>
          ))
        );
      });
  }, []);

  const checkForm = (e) => {
    let checkBoxCounter = 0;
    e.preventDefault();

    categories.map((category) =>
      document.querySelector(`#check${category}`).checked === true
        ? (checkBoxCounter += 1)
        : ''
    );

    if (checkBoxCounter > 0) {
      activatePopup(['ok', 'Your write is sent sucessfully.']);
    } else {
      activatePopup(['error', 'You have to select a category at least.']);
    }
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="py-32 px-5 container mx-auto flex flex-wrap"
    >
      <div className="conainer mx-auto font-pop text-lg xl:w-1/2 lg:w-1/2 md:w-1/2 w-full text-left text-gray-400">
        <div className="w-full pb-2 ">Wanna write something?</div>
        <div className="w-full text-sm rounded-lg bg-gray-800 flex xl:flex-nowrap lg:flex-nowrap flex-wrap xl:justify-start lg:justify-start justify-center content-center p-5">
          <div className="self-center text-center">
            Write something, choose category of write and share around the
            world.
          </div>
        </div>
      </div>

      <div className="w-full mt-10 font-pop transition-all duration-300 justify-center flex flex-wrap">
        <div
          className="w-full transform flex justify-center p-0 m-0"
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="450"
        >
          <div className="writes shadow-xl border border-gray-900 transition-all duration-300  mt-3 mb-16 xl:w-1/2 lg:w-1/2 flex flex-wrap overflow-hidden justify-center content-start rounded-xl md:w-1/2 w-full bg-gray-800 p-0">
            <div className="write-header text-gray-300 w-full text-lg border-b transition-all duration-300 border-gray-900 p-5">
              <div className="w-full pb-2  text-sm text-gray-500">
                Content of your write.
              </div>
              <textarea
                id="#write-content"
                onChange={(e) => {
                  e.target.value.length > 0
                    ? (document.querySelector('.submit-btn').disabled = false)
                    : (document.querySelector('.submit-btn').disabled = true);
                }}
                placeholder="Bla bla bla.."
                className="w-full bg-gray-700 focus:border-0 focus:ring-4 focus:ring-opacity-20 focus:ring-offset-0  focus:ring-blue-400 border-0 ring-0 outline-none p-3 text-sm placeholder-gray-500 rounded-lg"
                style={{ minHeight: '90px' }}
              />
            </div>
            <div className="write-content flex flex-wrap text-gray-300 text-md w-full font-light transition-all duration-300 p-5">
              <div className="w-full pb-3 text-sm text-gray-500">
                Choose category of your write.
              </div>
              <form onSubmit={checkForm} className="w-full flex flex-wrap">
                {checkBoxes}
                <div className="w-full flex flex-wrap justify-start content-center pt-5">
                  <button
                    className="submit-btn text-sm px-5 py-2 bg-blue-900 hover:bg-blue-700 rounded-md flex flex-wrap content-center justify-center fill-current"
                    type="submit"
                    disabled
                  >
                    <span>Send</span>
                    <span className="ml-2 self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="self-center w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
