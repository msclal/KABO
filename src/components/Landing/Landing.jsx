import React from "react";
import Image from "next/image";
import LandingCard from "./LandingCard";
import LogoDesktop from "@/images/landing_desktop.svg";
import LogoMobile from "@/images/landing_mobile.svg";

export default function Hero() {
  return (
    <div className="flex flex-col px-5 sm:px-8 lg:px-16">
      <div className="flex justify-between flex-wrap relative overflow-hidden">
        <div className="max-sm:hidden w-[800px] lg:w-[1000px] pt-32">
          <Image
            src={LogoDesktop}
            width={700}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw, 100vw"
            className="object-contain w-full"
            alt="KABO"
          />
        </div>
        <div className="sm:hidden w-[400px] pt-40">
          <Image
            src={LogoMobile}
            width={700}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw, 100vw"
            className="object-contain w-full"
            alt="KABO"
          />
        </div>
        <div className="flex-grow">
          <LandingCard />
        </div>
      </div>
      <p className="absolute bottom-5 text-base font-outfit text-center text-kabo-white sm:text-left max-sm:px-0">
        From the collaborative work of Bobby and Mika.
      </p>
    </div>
  );
}
