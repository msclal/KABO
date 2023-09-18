"use client";
import Image from "next/image";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectMobile({ id, project, isOpen, handleClick }) {
  const { title, type, year, content, tools, imagesMobile } = project;
  return (
    <AccordionItem value={id}>
      <AccordionTrigger
        onClick={() => {
          if (isOpen) {
            handleClick("");
          } else {
            handleClick(id);
          }
        }}
        // WHITE BG
        className={`${id == "item-1" && `border-t border-t-kabo-white`} ${
          isOpen && `bg-kabo-white text-kabo-black px-5 duration-300`
        }`}

        // BLACK BG
        // className={`${id == "item-1" && `border-t border-t-kabo-white`} ${
        //   isOpen && `bg-kabo-black duration-300`
        // // }`}
      >
        <div className="flex justify-between w-full px-7">
          <p>{title}</p>
          <p className="max-sm:hidden">{type}</p>
          <p>{year}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="w-full justify-items-center p-7 max-sm:space-y-5">
          <p className="text-left font-semibold text-lg sm:hidden">{type} </p>
          <div className="space-y-5 text-sm">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="flex gap-x-5 pt-5 flex-wrap gap-y-3">
              {tools.map((tool, index) => (
                <span
                  className="border-[0.5px] border-kabo-white rounded-3xl w-fit px-5 h-fit py-[2px]"
                  key={index}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 scrollbar-none w-full pb-4">
          {imagesMobile.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
