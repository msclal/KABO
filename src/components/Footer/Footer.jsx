import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Banner from "@/images/footer.jpg";

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

        {/* MOBILE - CONTACT INFO SWITCHES SIDES */}
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
