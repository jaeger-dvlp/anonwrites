import React, { useContext, useEffect } from 'react';
import Write from './Write';
import Context from '../Context';
import LoadingWrite from './LoadingWrite';

export default function Homepage() {
  const { writeData } = useContext(Context);

  useEffect(() => {}, []);
  const writeElms = writeData
    ? writeData.map((elm) => (
        <Write author={elm.author} content={elm.content} time={elm.time} />
      ))
    : '';

  return (
    <div className="container mx-auto py-32 px-5">
      <div className="w-full text-white flex flex-wrap justify-center content-start">
        {writeElms ? [writeElms] : <LoadingWrite />}
      </div>
    </div>
  );
}
