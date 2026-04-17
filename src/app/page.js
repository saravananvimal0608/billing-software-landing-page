import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="bg-banner">
     <Hero/>
     <WhyChooseUs/>
     <Features/>
     <Contact/>
    </div>
  );
}
