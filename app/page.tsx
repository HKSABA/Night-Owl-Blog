import Navbar from "./clientComponents/Navbar";
import Home from "./pageComponents/Home";
import About from "./pageComponents/About";
import FeaturedPreviewContainer from "./pageComponents/FeaturedPreviewContainer";
import LatestPreviewContainer from "./pageComponents/LatestPreviewContainer";
import Newsletter from "./pageComponents/Newsletter";
import Footer from "./pageComponents/Footer";
import "./globals.css";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#dfecff] via-[#f3f3f3] to-neutral-50 lg:bg-none lg:h-screen relative font-sans overflow-x-hidden overflow-y-scroll lg:snap-y lg:snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400">
      {/* -------------- Header -------------- */}
      <Navbar />

      <section id="home" className="lg:snap-start lg:h-screen ">
        <Home />
      </section>

      <section id="about" className="lg:snap-start lg:h-screen">
        <About />
      </section>

      <section id="featured" className="lg:snap-start lg:h-screen">
        <FeaturedPreviewContainer />
      </section>

      <section id="latest" className="lg:snap-start relative">
        <LatestPreviewContainer />
      </section>

      <section id="subscribe" className="lg:snap-start relative lg:h-screen">
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
}
