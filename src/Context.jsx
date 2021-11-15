/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [writeData, setWriteData] = useState(null);
  const [popUp, setPopup] = useState({
    status: '',
    content: '',
    visibility: 'invisible opacity-0',
    button: null,
  });

  const hidePopup = () => {
    setPopup({
      status: popUp.status,
      content: popUp.content,
      visibility: 'invisible opacity-0',
      button: popUp.button,
    });
  };

  const activatePopup = (data) => {
    setPopup({
      status: data[0],
      content: data[1],
      visibility: 'visible opacity-1',
      button: data[2],
    });
  };

  const updateWrites = async () => {
    await fetch('http://localhost:3050/getWrites')
      .then((res) => res.json())
      .then((resData) => setWriteData(resData))
      .catch((err) => {
        activatePopup(['error', 'An error occurred.', 'okay']);
        setTimeout(() => {
          updateWrites();
        }, 500);
      });
  };

  useEffect(async () => {
    await fetch('http://localhost:3050/getWrites', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resData) => {
        setWriteData(resData);
      })
      .catch((err) => {
        activatePopup(['error', 'An error occurred.', 'okay']);
        setTimeout(() => {
          updateWrites();
        }, 500);
      });
  }, []);

  const value = { writeData, updateWrites, popUp, hidePopup, activatePopup };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
