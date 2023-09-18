"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectDesktop({ id, project, isOpen, handleClick }) {
  const { title, type, year, logo, link, content, tools, imagesDesktop } =
    project;

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
            <div className="flex flex-col justify-start items-center space-y-5 pt-3">
              <Image src={logo} alt="uranus 27" />
              <Link href={link} className="text-center w-full">
                {link}
              </Link>
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
