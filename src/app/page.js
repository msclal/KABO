import Navbar from "@/components/Navbar/Navbar";
import Landing from "@/components/Landing/Landing";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen relative">
        <Navbar />
        <Landing />
      </div>
      <Gallery />
      {/* <div className=""> */}
      {/* <InifiteScroll /> */}
      {/* <Scroll /> */}
      <Projects />
      {/* </div> */}
      <Footer />
    </div>
  );
}
