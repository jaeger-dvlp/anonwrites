import React, { useContext, useEffect } from 'react';
import faker from 'faker';

import Write from './Write';
import Context from '../Context';
import LoadingWrite from './LoadingWrite';

export default function Homepage() {
  const { writeData } = useContext(Context);

  useEffect(() => {}, []);

  const writeElms = writeData
    ? writeData.map((elm) => (
        <Write
          key={faker.datatype.uuid()}
          author={elm.writeAuthor}
          content={elm.writeContent}
          time={elm.writeTime}
          categories={elm.writeCategories}
        />
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
