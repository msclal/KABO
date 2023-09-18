"use client";
import { useState } from "react";
import MarqueeScroll from "./MarqueeScroll";
import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";
import { Accordion } from "@/components/ui/accordion";
import { useSectionInView } from "@/lib/hooks";
import { projectList } from "@/lib/data";

export default function Projects() {
  const [isOpen, setIsOpen] = useState("");
  const { ref } = useSectionInView("projects", 0.4);

  const handleClick = (projectId) => {
    setIsOpen(projectId);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-0 xl:py-64 xl:pb-48 relative"
    >
      <MarqueeScroll />
      {/* Desktop */}
      <Accordion type="single" collapsible className="w-full max-xl:hidden">
        {projectList.map((project, index) => (
          <ProjectDesktop
            key={index}
            id={`item-${index + 1}`}
            project={project}
            isOpen={isOpen === `item-${index + 1}`}
            handleClick={handleClick}
          />
        ))}
      </Accordion>

      {/* MOBILE */}
      <Accordion type="single" collapsible className="w-full py-40 xl:hidden">
        {projectList.map((project, index) => (
          <ProjectMobile
            key={index}
            id={`item-${index + 1}`}
            project={project}
            isOpen={isOpen === `item-${index + 1}`}
            handleClick={handleClick}
          />
        ))}
      </Accordion>
    </section>
  );
}
