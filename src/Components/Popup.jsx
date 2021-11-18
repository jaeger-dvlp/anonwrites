/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import Context from '../Context';

const errorIcon = (
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
);

const okIcon = (
  <div className="p-3 bg-green-500 fill-current text-green-500 bg-opacity-30 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
    </svg>
  </div>
);

const infoIcon = (
  <div className="p-3 bg-blue-500 fill-current text-blue-500 bg-opacity-30 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
    </svg>
  </div>
);

export default function Popup() {
  const { popUp, hidePopup } = useContext(Context);

  return (
    <div
      className={`w-full font-pop ${popUp.visibility} flex flex-wrap justify-center content-center transition-all duration-300 h-full fixed top-0 left-0 bg-black bg-opacity-50`}
    >
      <div className="container mx-auto p-0 m-0">
        <div className="w-full flex flex-wrap justify-center content-center p-5">
          <div
            data-aos="fade-down"
            className="xl:w-1/3 lg:w-1/2 w-full bg-gray-800 rounded-xl text-white p-0 shadow-xl"
          >
            <div className="popupHeader w-full flex flex-wrap justify-center content-center p-4 border-b border-gray-900">
              {popUp.status === 'error'
                ? errorIcon
                : popUp.status === 'ok'
                ? okIcon
                : popUp.status === 'info'
                ? infoIcon
                : ''}
            </div>
            <div className="w-full whitespace-pre font-light text-center flex flex-wrap justify-center content-center p-5">
              {popUp.content}
            </div>
            <div className="w-full flex flex-wrap justify-center content-center p-5">
              {popUp.button === 'okay' ? (
                <button
                  onClick={hidePopup}
                  className="px-5 py-2 hover:bg-opacity-60 rounded-lg bg-gray-500 text-gray-300 bg-opacity-30"
                  type="button"
                >
                  Okay.
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
