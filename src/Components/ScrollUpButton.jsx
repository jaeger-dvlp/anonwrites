/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';

export default function ScrollUpButton() {
  const [buttonStatus, setButtonStatus] = useState('opacity-100 bottom-30');

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setButtonStatus('opacity-100 bottom-32');
      } else {
        setButtonStatus('opacity-0 bottom-10');
      }
    };
  });
  return (
    <div className="container fixed mx-auto">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        className={`scrollUpButton fixed opacity-0 bottom-10 right-10 ${buttonStatus}  flex flex-wrap justify-center content-center p-5 fill-current text-center  border border-gray-900 rounded-full text-4xl shadow-xl bg-gray-800 transition-all duration-200 transform hover:-translate-y-2 hover:text-gray-300 text-gray-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />
        </svg>
      </button>
    </div>
  );
}
