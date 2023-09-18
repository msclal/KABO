"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
export default function ContactForm() {
  const { toast } = useToast();

  const form = useRef();
  const handleSend = (e) => {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value && e.target[2].value) {
      emailjs
        .sendForm(
          "service_hy4bsvp",
          "template_9e567ar",
          form.current,
          "B0GWTfpimt3X7kH-y",
        )
        .then(
          (result) => {},
          (error) => {
            console.log(error.text);
          },
        )
        .finally(() => {
          e.target.reset();
          toast({
            variant: "success",
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
          });
        });
    } else {
      toast({
        variant: "destructive",
        title: "Oops! Something's Missing...",
        description: "Double-check the form for any missing details.",
      });
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-y-10 justify-between flex-wrap">
      <div className="w-full lg:w-1/2">
        <p className="font-magilio text-5xl md:text-7xl">Get in Touch</p>
        <p className="font-nevis text-lg md:text-3xl">
          Paramore, the musical sensation that emerged from the vibrant city of
          Franklin, Tennessee, has been a source of inspiration for countless
          fans worldwide.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={handleSend}
        className="w-full lg:w-[40%] flex flex-col gap-y-5 justify-end"
      >
        <div className="flex gap-x-10">
          <div>
            <label className="font-semibold">Name*</label>
            <input
              type="text"
              name="name"
              className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none"
            />
          </div>
          <div className="md:w-96 lg:w-full">
            <label className="font-semibold">Email*</label>
            <input
              type="email"
              name="email"
              className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <label className="font-semibold pb-3">Message*</label>
            <textarea
              name="message"
              className="bg-kabo-white min-h-[100px] md:min-h-[120px] border-kabo-gray text-xl md:text-2xl text-kabo-black max-h-64 focus:outline-none border"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Send"
          className="self-end border-[0.5px] border-kabo-gray sm:hover:bg-kabo-gray sm:hover:text-kabo-white cursor-pointer rounded-3xl w-fit px-10 h-fit py-[2px] duration-300"
        />
      </form>
    </div>
  );
}
