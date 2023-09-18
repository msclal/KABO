"use client";
import { useState } from "react";
import MarqueeScroll from "./MarqueeScroll";
import Project from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";
import { Accordion } from "@/components/ui/accordion";
import { useSectionInView } from "@/lib/hooks";
import Uranus from "@/images/uranus.png";
import Desktop from "@/images/projects_desktop.png";
import Example from "@/images/projects_mobile.png";

const projectList = [
  {
    id: "item-1",
    title: "BELOW ZERO",
    type: "WEB DESIGN & DEVELOPMENT",
    year: "2023",
    logo: Uranus,
    link: "uranus27.com",
    content: [
      'Olivia Rodrigo, the rising star of the music industry, has captivated the hearts of millions with her soulful melodies and heartfelt lyrics. With her debut album "SOUR," Olivia has proven herself as a force to be reckoned with in the world of pop music.',

      'Her emotional performances on stage leave audiences spellbound, and her relatable lyrics resonate with listeners of all ages. From "drivers license" to "good 4 u," Olivias songs are anthems of generation, exploring the rollercoaster of emotions that come with love and heartbreak.',
    ],
    tools: ["Figma", "Next.js", "TailwindCSS", "Vercel"],
    imagesDesktop: [Desktop, Desktop, Desktop],
    imagesMobile: [Example, Example, Example],
  },
  {
    id: "item-2",
    title: "STIMULANT",
    type: "WEB DESIGN & DEVELOPMENT",
    year: "2023",
    logo: Uranus,
    link: "uranus27.com",
    content: [
      'Olivia Rodrigo, the rising star of the music industry, has captivated the hearts of millions with her soulful melodies and heartfelt lyrics. With her debut album "SOUR," Olivia has proven herself as a force to be reckoned with in the world of pop music.',

      'Her emotional performances on stage leave audiences spellbound, and her relatable lyrics resonate with listeners of all ages. From "drivers license" to "good 4 u," Olivias songs are anthems of generation, exploring the rollercoaster of emotions that come with love and heartbreak.',
    ],
    tools: ["Figma", "Next.js", "TailwindCSS", "Vercel"],
    imagesDesktop: [Desktop, Desktop, Desktop],
    imagesMobile: [Example, Example, Example],
  },
  {
    id: "item-3",
    title: "URANUS 27",
    type: "WEB DESIGN",
    year: "2023",
    logo: Uranus,
    link: "uranus27.com",
    content: [
      'Olivia Rodrigo, the rising star of the music industry, has captivated the hearts of millions with her soulful melodies and heartfelt lyrics. With her debut album "SOUR," Olivia has proven herself as a force to be reckoned with in the world of pop music.',

      'Her emotional performances on stage leave audiences spellbound, and her relatable lyrics resonate with listeners of all ages. From "drivers license" to "good 4 u," Olivias songs are anthems of generation, exploring the rollercoaster of emotions that come with love and heartbreak.',
    ],
    tools: ["Figma", "Next.js", "TailwindCSS", "Vercel"],
    imagesDesktop: [Desktop, Desktop, Desktop],
    imagesMobile: [Example, Example, Example],
  },
];

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
      <Accordion type="single" collapsible className="w-full max-xl:hidden">
        {projectList.map((project, index) => (
          <Project
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
