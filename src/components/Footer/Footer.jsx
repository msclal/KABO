import Image from "next/image";
import Banner from "@/images/footer.jpg";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact">
      <div className="relative h-[120px] sm:h-[250px]">
        <Image
          src={Banner}
          alt="footer banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="bg-kabo-white py-10 sm:py-6 lg:py-10 px-5 sm:px-8 lg:px-16 text-kabo-gray space-y-10">
        {/* <div className="flex flex-col lg:flex-row gap-y-10 justify-between flex-wrap">
          <div className="w-full lg:w-1/2">
            <p className="font-magilio text-5xl md:text-7xl">Get in Touch</p>
            <p className="font-nevis text-lg md:text-3xl">
              Paramore, the musical sensation that emerged from the vibrant city
              of Franklin, Tennessee, has been a source of inspiration for
              countless fans worldwide.
            </p>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col gap-y-5 justify-end">
            <div className="flex gap-x-10">
              <div className="">
                <p className="font-semibold">Name*</p>
                <input className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none" />
              </div>
              <div className="md:w-96 lg:w-full">
                <p className="font-semibold">Email*</p>
                <input className="bg-kabo-white border-b border-kabo-gray w-full text-lg md:text-2xl text-kabo-black focus:outline-none" />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <p className="font-semibold pb-3">Message*</p>
                <textarea className="bg-kabo-white min-h-[100px] md:min-h-[120px] border-kabo-gray text-xl md:text-2xl text-kabo-black max-h-64 focus:outline-none border" />
              </div>
            </div>
            <p className="self-end border-[0.5px] border-kabo-gray sm:hover:bg-kabo-gray sm:hover:text-kabo-white cursor-pointer rounded-3xl w-fit px-10 h-fit py-[2px]">
              Send
            </p>
          </div>
        </div> */}
        <ContactForm />
        {/* DESKTOP */}
        <div className="flex justify-between items-end self-end h-full max-lg:hidden">
          <div className="text-left">
            <div>© KABO! studio {currentYear}</div>
            <p>California, USA</p>
          </div>
          <div className="flex gap-x-5 xl:gap-x-20 underline underline-offset-4">
            <Link
              href="mailto:kabo.blueprint@gmail.com"
              aria-label="KABO Email"
            >
              KABO.blueprint@gmail.com
            </Link>
            <Link href={"tel:9092145009"} aria-label="Phone">
              Mika: +1 (909) 214-5009
            </Link>
            <Link href={"tel:9513488149"} aria-label="Phone">
              Bobby: +1 (951) 348-8149
            </Link>
          </div>
        </div>

        {/* MOBILE - SWITCH SIDES */}
        <div className="flex justify-between items-end self-end h-full max-sm:text-xs lg:hidden">
          <div className="flex flex-col gap-y-1">
            <Link
              href="mailto:kabo.blueprint@gmail.com"
              aria-label="KABO Email"
            >
              KABO.blueprint@gmail.com
            </Link>
            <Link href={"tel:9092145009"} aria-label="Phone">
              Mika: +1 (909) 214-5009
            </Link>
            <Link href={"tel:9513488149"} aria-label="Phone">
              Bobby: +1 (951) 348-8149
            </Link>
          </div>
          <div className="text-right">
            <div>© KABO! studio {currentYear}</div>
            <p>California, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
