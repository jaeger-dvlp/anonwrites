/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();
const data = {
  author: 'jaeger-dvlp',
  content: 'Lorem ipsum dolor sit amet',
  date: '01/01/2021',
  time: '00:00',
};

// eslint-disable-next-line import/prefer-default-export
export const ContextProvider = ({ children }) => {
  const [writeData, setWWriteData] = useState(null);

  const updateWrites = () => {
    fetch('http://localhost:3050/getWrites')
      .then((res) => res.json)
      .then((resData) => console.log(resData));
  };

  useEffect(() => {
    fetch('http://localhost:3050/getWrites', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resData) => {
        setWWriteData(resData);
      });
  }, []);

  const value = { writeData, updateWrites };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
