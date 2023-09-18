"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as Skip } from "react-scroll";
import MobileNavText from "./NavMobileText";

const tabs = [
  { id: "home", label: "HOME" },
  { id: "info", label: "INFO" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.65,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.5,
      },
    },
  };

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="md:hidden px-4">
      <p
        onClick={toggleMenu}
        className="cursor-pointer 
border-2 border-kabo-gray  bg-kabo-white text-kabo-black mix-blend-difference rounded-2xl px-4 fixed right-5 top-10 z-10 font-outfit"
      >
        Menu
      </p>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-[100] left-0 top-0 w-screen h-screen origin-top bg-kabo-black"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center text-kabo-white relative">
                <div onClick={toggleMenu}>
                  <MobileNavText className="cursor-pointer text-md text-kabo-white text-right font-outfit absolute right-5 top-10 border-2 border-kabo-gray bg-kabo-black rounded-2xl px-4">
                    Close
                  </MobileNavText>
                </div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-screen justify-center font-lora items-center gap-16 text-center"
              >
                {/* Menu items */}
                {tabs.map((tab) => (
                  <Skip
                    key={tab.id}
                    to={tab.id}
                    onClick={toggleMenu}
                    className="overflow-hidden cursor-pointer"
                  >
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-5xl uppercase text-kabo-white font-magilio text-center"
                    >
                      {tab.label}
                    </motion.div>
                  </Skip>
                ))}

                <MobileNavText className="relative -bottom-10 self-center text-kabo-gold underline underline-offset-4 cursor-pointer">
                  KABO.blueprint@gmail.com
                </MobileNavText>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
