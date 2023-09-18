"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Uranus from "@/images/uranus.png";
import Desktop from "@/images/projects_desktop.png";
import Example from "@/images/projects_mobile.png";
import MarqueeScroll from "./MarqueeScroll";
import Project from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";
const projectList = [
  {
    id: "item-1",
    title: "BELOW ZERO",
    type: "WEB DESIGN & DEVELOPMENT",
    year: "2023",
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
    title: "BELOW ZERO",
    type: "WEB DESIGN & DEVELOPMENT",
    year: "2023",
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
    title: "BELOW ZERO",
    type: "WEB DESIGN & DEVELOPMENT",
    year: "2023",
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

  const handleClick = (projectId) => {
    setIsOpen(projectId);
  };

  return (
    <section id="projects" className="py-0 xl:py-64 xl:pb-48 relative">
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
        {/* <Accordion/> */}
        {/* <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={() => {
              if (isClicked === "item-1") {
                setIsClicked("");
              } else {
                setIsClicked("item-1");
              }
            }}
            className={`border-t border-t-kabo-white ${
              isClicked === "item-1" &&
              `bg-kabo-white text-kabo-black px-5 duration-300`
            }`}
          >
            <div className="flex justify-between w-full px-7">
              <p>BELOW ZERO</p>
              <p className="max-sm:hidden">WEB DESIGN & DEVELOPMENT</p>
              <p>2023</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full justify-items-center p-7 max-sm:space-y-5">
              <p className="text-left font-semibold text-lg sm:hidden">
                WEB DESIGN & DEVELOPMENT
              </p>
              <div className="space-y-5 text-sm">
                <p>
                  In the year 1989, Taylor Swift graced us with an album that
                  would redefine pop music. With her signature red lipstick and
                  a love for vintage, Taylor took us back to a time of neon
                  lights and cassette tapes.
                </p>
                <p>
                  As the sun set on the city, we found ourselves lost in the
                  rhythm of "Shake It Off," dancing away our worries. With
                  "Blank Space," Taylor told a tale of love, passion, and the
                  thrill of the unknown.
                </p>
                <div className="flex gap-x-5 pt-5 flex-wrap gap-y-3">
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Figma
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Next.js
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    TailwindCSS
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Vercel
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Resend
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 scrollbar-none w-full pb-4">
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" />
            </div>
          </AccordionContent>
        </AccordionItem> */}
        {/* <AccordionItem value="item-2">
          <AccordionTrigger
            onClick={() => {
              if (isClicked === "item-2") {
                setIsClicked("");
              } else {
                setIsClicked("item-2");
              }
            }}
            className={`${
              isClicked === "item-2" &&
              `bg-kabo-white text-kabo-black px-5 duration-300`
            }`}
          >
            <div className="flex justify-between w-full px-7">
              <p>BELOW ZERO</p>
              <p className="max-sm:hidden">WEB DESIGN & DEVELOPMENT</p>
              <p>2023</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full justify-items-center p-7 max-sm:space-y-5">
              <p className="text-left font-semibold text-lg sm:hidden">
                WEB DESIGN & DEVELOPMENT
              </p>
              <div className="space-y-5 text-sm">
                <p>
                  In the year 1989, Taylor Swift graced us with an album that
                  would redefine pop music. With her signature red lipstick and
                  a love for vintage, Taylor took us back to a time of neon
                  lights and cassette tapes.
                </p>
                <p>
                  As the sun set on the city, we found ourselves lost in the
                  rhythm of "Shake It Off," dancing away our worries. With
                  "Blank Space," Taylor told a tale of love, passion, and the
                  thrill of the unknown.
                </p>
                <div className="flex gap-x-5 pt-5 flex-wrap gap-y-3">
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Figma
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Next.js
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    TailwindCSS
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Vercel
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Resend
                  </p>
                </div> */}
        {/* <div className="flex gap-x-3 overflow-auto scrollbar-none">
                  <Image src={Example} alt="example" />
                  <Image src={Example} alt="example" />
                  <Image src={Example} alt="example" />
                  {/* <Image src={Example} alt="example" /> */}
        {/* </div> */}
        {/* </div>
            </div>
            <div className="flex gap-x-3 scrollbar-none w-full pb-4">
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" /> */}
        {/* <Image src={Example} alt="example" /> */}
        {/* </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger
            onClick={() => {
              if (isClicked === "item-3") {
                setIsClicked("");
              } else {
                setIsClicked("item-3");
              }
            }}
            className={`${
              isClicked === "item-3" &&
              `bg-kabo-white text-kabo-black px-5 duration-300`
            }`}
          >
            <div className="flex justify-between w-full px-7">
              <p>BELOW ZERO</p>
              <p className="max-sm:hidden">WEB DESIGN & DEVELOPMENT</p>
              <p>2023</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full justify-items-center p-7 max-sm:space-y-5">
              <p className="text-left font-semibold text-lg sm:hidden">
                WEB DESIGN & DEVELOPMENT
              </p>
              <div className="space-y-5 text-sm">
                <p>
                  In the world of Lorde's "Pure Heroine," emotions ran deep, and
                  every lyric was a treasure waiting to be unearthed. It was a
                  sonic landscape where we could lose ourselves and find pieces
                  of our own stories.
                </p>
                <p>
                  In the world of Lorde's "Pure Heroine," emotions ran deep, and
                  every lyric was a treasure waiting to be unearthed. It was a
                  sonic landscape where we could lose ourselves and find pieces
                  of our own stories.
                </p>
                <div className="flex gap-x-5 pt-5 flex-wrap gap-y-3">
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Figma
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Next.js
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    TailwindCSS
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Vercel
                  </p>
                  <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]">
                    Resend
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 scrollbar-none w-full pb-4">
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" />
              <Image src={Example} alt="example" className="w-full" />
            </div>
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </section>
  );
}

{
  /* <Accordion type="single" collapsible className="w-full max-xl:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={() => {
              if (isClicked === "item-1") {
                setIsClicked("");
              } else {
                setIsClicked("item-1");
              }
            }}
            className={`border-t border-t-kabo-white ${
              isClicked === "item-1" && `bg-kabo-black`
            }`}
          >
            <div className="grid grid-cols-3 w-full font-semibold">
              <p className="">BELOW ZERO</p>
              <p className="text-left">WEB DESIGN & DEVELOPMENT</p>
              <p>2023</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="grid grid-cols-3 w-full justify-items-center my-7">
                <div className="space-y-5">
                  <Image src={Uranus} alt="uranus 27" />
                  <p className="text-center">uranus27.com</p>
                </div>
                <div className="space-y-5">
                  <p>
                    Olivia Rodrigo, the rising star of the music industry, has
                    captivated the hearts of millions with her soulful melodies
                    and heartfelt lyrics. With her debut album "SOUR," Olivia
                    has proven herself as a force to be reckoned with in the
                    world of pop music.
                  </p>
                  <p>
                    Her emotional performances on stage leave audiences
                    spellbound, and her relatable lyrics resonate with listeners
                    of all ages. From "drivers license" to "good 4 u," Olivia's
                    songs are anthems of a generation, exploring the
                    rollercoaster of emotions that come with love and
                    heartbreak.
                  </p>
                  <div className="flex w-full flex-wrap gap-x-5 gap-y-3 pt-3">
                    <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-10 py-[2px]">
                      Figma
                    </p>
                    <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-10 py-[2px]">
                      Next.js
                    </p>
                    <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-10 py-[2px]">
                      TailwindCSS
                    </p>
                    <p className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-10 py-[2px]">
                      TailwindCSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex self-start gap-x-5 w-full pb-4">
                <Image
                  src={Desktop}
                  alt="example"
                  className="object-cover w-full"
                />
                <Image
                  src={Desktop}
                  alt="example"
                  className="object-cover w-full"
                />
                <Image
                  src={Desktop}
                  alt="example"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */
}
