"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import KABODefinitionCard from "./KABODefinitionCard";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <header
      id="home"
      className="relative flex justify-between py-5 sm:py-6 lg:py-10 px-5 sm:px-8 lg:px-16"
    >
      <KABODefinitionCard />

      {/* DESKTOP */}
      <NavbarDesktop />
      {/* MOBILE */}
      <NavbarMobile />
    </header>
  );
};

export default Navbar;
