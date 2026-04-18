import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChoose";

export default function Home() {
  return (
    <div >
     <Hero/>
     <WhyChooseUs/>
     <Features/>
     <Contact/>
    </div>
  );
}
