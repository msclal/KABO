import React from "react";
import Marquee from "react-fast-marquee";

export default function Scroll() {
  return (
    <div className="absolute top-10 sm:top-10 xl:top-28 w-full">
      <Marquee speed={80}>
        <div className="flex gap-x-10 w-full text-8xl text-kabo-white font-magilio">
          <p className="pl-10">/</p>
          <p>PROJECTS</p>
          <p>/</p>
          <p>PROJECTS</p>
          <p>/</p>
          <p>PROJECTS</p>
          <p>/</p>
          <p>PROJECTS</p>
          <p>/</p>
          <p>PROJECTS</p>
          <p>/</p>
          <p>PROJECTS</p>
        </div>
      </Marquee>
    </div>
  );
}
