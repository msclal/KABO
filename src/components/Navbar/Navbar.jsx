"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import KABODefinitionCard from "./KABODefinitionCard";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const tabs = [
  { id: "home", label: "HOME" },
  { id: "info", label: "INFO" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <header
      id="home"
      className="relative flex justify-between py-5 sm:py-6 lg:py-10 px-5 sm:px-8 lg:px-16"
    >
      <KABODefinitionCard />

      {/* DESKTOP */}
      <NavbarDesktop />
      {/* MOBILE */}
      <NavbarMobile />
    </header>
  );
};

export default Navbar;

/* <div className="md:hidden px-4">
<p
  onClick={toggleMenu}
  className="cursor-pointer 
border-2 border-kabo-black bg-kabo-white text-kabo-black mix-blend-difference rounded-2xl px-4 fixed right-5 top-10 z-10"
>
  Menu
</p>
<AnimatePresence>
  {open && (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed z-[100] left-0 top-0 w-screen h-screen origin-top bg-kabo-black"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-between items-center text-kabo-white relative">
          <div onClick={toggleMenu}>
            <MobileNavText className="cursor-pointer text-md text-kabo-white text-right font-outfit absolute right-5 top-10 border-2 border-kabo-gray bg-kabo-black rounded-2xl px-4">
              Close
            </MobileNavText>
          </div>
        </div>
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col h-screen justify-center font-lora items-center gap-16 text-center"
        >
          {/* Menu items */
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               onClick={toggleMenu}
//               className="overflow-hidden"
//             >
//               <MobileNavLink title={tab.label} href={tab.id} />
//             </div>
//           ))}
//           <a
//             href="mailto:kabo.blueprint@gmail.com"
//             aria-label="KABO Email"
//           >
//             <MobileNavText className="relative -bottom-10 self-center text-kabo-gold underline underline-offset-4">
//               KABO.blueprint@gmail.com
//             </MobileNavText>
//           </a>
//         </motion.div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
// </div> */}
