"use client";
import { motion } from "framer-motion";
import { Link as Skip } from "react-scroll";
import { useActiveSectionContext } from "@/context/ActiveSection";
const tabs = [
  { id: "home", label: "HOME" },
  { id: "info", label: "INFO" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function NavDesktop() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="flex font-outfit font-light gap-x-2 lg:gap-x-6 xl:gap-x-12 text-sm lg:text-base text-kabo-white fixed right-8 lg:right-16 max-md:hidden z-10 mix-blend-difference">
      {tabs.map((tab) => (
        <Skip
          key={tab.id}
          to={tab.id}
          smooth={true}
          duration={500}
          onClick={() => {
            setActiveSection(tab.id);
            setTimeOfLastClick(Date.now());
          }}
          className={`${
            tab.id === activeSection
              ? ""
              : "hover:text-kabo-white/80 hover:duratation-300"
          } relative rounded-full px-4 py-1.5 text-sm font-medium text-white transition cursor-pointer`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeSection === tab.id && (
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
