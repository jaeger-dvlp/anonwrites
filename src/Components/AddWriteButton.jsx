import React from 'react';
import { Link } from 'react-router-dom';

export default function AddWriteButton() {
  return (
    <div className="container fixed mx-auto">
      <Link
        to="/new"
        className="addWriteButton fixed right-10 bottom-10 flex flex-wrap  justify-center content-center p-5 fill-current text-center  border border-gray-900 rounded-full text-4xl shadow-xl bg-gray-800 transition-all duration-200 transform hover:-translate-y-2 hover:text-gray-300 text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
        </svg>
      </Link>
    </div>
  );
}
