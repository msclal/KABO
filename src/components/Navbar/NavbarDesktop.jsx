"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as Skip } from "react-scroll";

const tabs = [
  { id: "home", label: "HOME" },
  { id: "info", label: "INFO" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function NavDesktop() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex font-outfit font-light gap-x-2 lg:gap-x-6 xl:gap-x-12 text-sm lg:text-base text-kabo-white fixed right-8 lg:right-16 max-md:hidden z-10 mix-blend-difference">
      {tabs.map((tab) => (
        <Skip
          key={tab.id}
          to={tab.id}
          smooth={true}
          duration={500}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id
              ? ""
              : "hover:text-kabo-white/60 hover:duration-300"
          } relative rounded-full px-4 py-1.5 text-sm font-medium text-white transition cursor-pointer`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 border-2 border-kabo-black bg-kabo-white text-kabo-black mix-blend-difference rounded-2xl"
              transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
            />
          )}
          {tab.label}
        </Skip>
      ))}
    </div>
  );
}
