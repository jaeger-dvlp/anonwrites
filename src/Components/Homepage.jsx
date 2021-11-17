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
        {writeElms ? (
          <>
            <div
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="450"
              className="conainer mb-10 mx-auto font-pop text-lg xl:w-1/2 lg:w-1/2 md:w-1/2 w-full text-left text-gray-400"
            >
              <div className="w-full pb-2 ">Hey, wanna join to mayhem?</div>
              <div className="w-full text-sm rounded-lg bg-gray-800 flex xl:flex-nowrap lg:flex-nowrap flex-wrap xl:justify-start lg:justify-start justify-center content-center p-5">
                <div className="self-center text-center">
                  Explore anonym articles around the world or create one
                  yourself.
                </div>
              </div>
            </div>
            {[writeElms]}
          </>
        ) : (
          <LoadingWrite />
        )}
      </div>
    </div>
  );
}
