import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="header z-50 text-white main-bg-grad py-5 fixed font-pop font-medium flex w-full flex-wrap text-center justify-center text-2xl"
    >
      <Link to="/">
        AnonWrites
        <span className="header-anim">_</span>
      </Link>
    </div>
  );
}
