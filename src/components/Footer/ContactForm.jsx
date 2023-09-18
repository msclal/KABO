"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
// import axios from "axios";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSend = async () => {
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      console.log("Send");

      setForm({ name: "", email: "", message: "" });
      toast({
        variant: "success",
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // await axios
      //   .post('/api/email/', form)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      //   .finally(() => {
      //     setForm({ name: "", email: "", message: "" });
      //     toast({
      //       variant: "success",
      //       title: "Got your Message!",
      //       description: "We'll get back to you as soon as possible.",
      //     });

      //   });
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
      <div className="w-full lg:w-[40%] flex flex-col gap-y-5 justify-end">
        <div className="flex gap-x-10">
          <div className="">
            <p className="font-semibold">Name*</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none"
            />
          </div>
          <div className="md:w-96 lg:w-full">
            <p className="font-semibold">Email*</p>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <p className="font-semibold pb-3">Message*</p>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-kabo-white min-h-[100px] md:min-h-[120px] border-kabo-gray text-xl md:text-2xl text-kabo-black max-h-64 focus:outline-none border"
            />
          </div>
        </div>
        <p
          onClick={handleSend}
          className="self-end border-[0.5px] border-kabo-gray sm:hover:bg-kabo-gray sm:hover:text-kabo-white cursor-pointer rounded-3xl w-fit px-10 h-fit py-[2px] duration-300"
        >
          Send
        </p>
      </div>
    </div>
  );
}
