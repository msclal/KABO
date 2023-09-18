import React from "react";
import Images from "@/images/gallery.jpg";
import Image from "next/image";
export default function Gallery() {
  return (
    <section className="px-0 sm:px-8 lg:px-16 w-full">
      {/* <div className="relative flex justify-center items-center bg-slate-500">
        <Image
          src={Images}
          //   width={700}
          //   height={400}
          alt="kabo_gallery"
          //   fill
          //   objectFit="cover"
          sizes="(min-width: 1440px) 1220px, (min-width: 1040px) calc(81.05vw + 69px), (min-width: 640px) calc(100vw - 64px), 100vw"
          className="mr-auto object-cover"
        />
      </div> */}
      <div className="h-[200px] sm:h-[320px] lg:h-[600px] bg-slate-600 relative flex justify-center items-center">
        <Image
          src={Images}
          alt="kabo_gallery"
          priority={true}
          fill
          sizes="
		(min-width: 1040px) calc(100vw - 128px),
		(min-width: 640px) calc(100vw - 64px),
		100vw
	"
          className="object-cover"
        />
      </div>
    </section>
  );
}
