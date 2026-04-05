import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Platform from "./components/Platform";
import FeaturedModules from "./components/FeaturedModules";
import Testimonials from "./components/Testimonials";
import Security from "./components/Security";
import ExpertPanel from "./components/ExpertPanel";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Platform />
      <FeaturedModules />
      <Testimonials />
      <Security />
      <ExpertPanel />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
