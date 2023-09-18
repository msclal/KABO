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

export default function ProjectDesktop({ id, project, isOpen, handleClick }) {
  const [isClicked, setIsClicked] = useState("");
  const { title, type, year, content, tools, imagesDesktop } = project;

  return (
    // <div>
    <AccordionItem value={id}>
      <AccordionTrigger
        onClick={() => {
          if (isOpen) {
            handleClick("");
          } else {
            handleClick(id);
          }
        }}
        className={`${id == "item-1" && `border-t border-t-kabo-white`} ${
          isOpen && `bg-kabo-black duration-300`
        }`}
      >
        <div className="grid grid-cols-3 w-full font-semibold">
          <p className="">{title}</p>
          <p className="text-left">{type}</p>
          <p>{year}</p>
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
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="flex w-full flex-wrap gap-x-5 gap-y-3 pt-3">
                {tools.map((tool, index) => (
                  <span
                    className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-10 py-[2px]"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {/* <p>
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
                  </p> */}
              {/* <div className="flex w-full flex-wrap gap-x-5 gap-y-3 pt-3">
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
                  </div> */}
            </div>

            {/* only 3 screenshots cap */}
          </div>
          <div className="flex self-start gap-x-5 w-full pb-4">
            {imagesDesktop.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full"
              />
            ))}
            {/* <Image
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
                /> */}
          </div>

          {/* scrolling screenshots */}
          {/* <div className="flex self-start gap-x-5 overflow-x-scroll h-[300px] scrollbar-none">
          <Image src={Desktop} alt="example" />
          <Image src={Desktop} alt="example" />
          <Image src={Desktop} alt="example" />
          <Image src={Desktop} alt="example" />
          <Image src={Desktop} alt="example" />
        </div> */}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

// {
/* <AccordionItem value="item-2">
          <AccordionTrigger
            onClick={() => {
              if (isClicked === "item-2") {
                setIsClicked("");
              } else {
                setIsClicked("item-2");
              }
            }}
            className={`${isClicked === "item-2" && `bg-kabo-black`}`}
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
                    In the year 1989, Taylor Swift graced us with an album that
                    would redefine pop music. With her signature red lipstick
                    and a love for vintage, Taylor took us back to a time of
                    neon lights and cassette tapes.
                  </p>
                  <p>
                    As the sun set on the city, we found ourselves lost in the
                    rhythm of "Shake It Off," dancing away our worries. With
                    "Blank Space," Taylor told a tale of love, passion, and the
                    thrill of the unknown.
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
        </AccordionItem> */
// }
// </div>
