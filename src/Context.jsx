/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [writeData, setWriteData] = useState(null);

  const updateWrites = async () => {
    await fetch('http://172.16.17.88:3050/getWrites')
      .then((res) => res.json())
      .then((resData) => setWriteData(resData))
      .catch((err) => {
        setTimeout(() => {
          updateWrites();
        }, 500);
      });
  };

  useEffect(async () => {
    await fetch('http://172.16.17.88:3050/getWrites', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resData) => {
        setWriteData(resData);
      })
      .catch((err) =>
        setTimeout(() => {
          updateWrites();
        }, 500)
      );
  }, []);

  const value = { writeData, updateWrites };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
