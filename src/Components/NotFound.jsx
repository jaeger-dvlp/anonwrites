import React, { useContext } from 'react';
import Context from '../Context';

export default function NotFound() {
  const { activatePopup } = useContext(Context);

  window.onload = () => {
    activatePopup(['error', "Looks like you're lost.", 'okay']);
  };
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="500"
      className=" w-full h-screen flex flex-wrap justify-center content-center font-pop text-center text-white"
    >
      <div className="w-full text-center">Looks like you&apos;re lost.</div>
      <div className="w-full flex flex-wrap justify-center content-center p-5">
        <a
          href="/"
          className="px-5 py-2 hover:bg-opacity-60 rounded-lg bg-gray-500 text-gray-300 bg-opacity-30"
        >
          Go Back.
        </a>
      </div>
    </div>
  );
}
