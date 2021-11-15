import React from 'react';

export default function Header() {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="header z-50 text-white main-bg-grad py-5 fixed font-pop font-medium flex w-full flex-wrap text-center justify-center text-2xl"
    >
      <a href="/">
        AnonWrites
        <span className="header-anim">_</span>
      </a>
    </div>
  );
}
