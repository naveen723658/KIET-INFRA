import ContactUs from "@/components/contactus";
import Hero from "@/components/hero";
import About from "@/components/home/About";
import Trust from "@/components/home/Trust";
import Banner from "@/components/home/banner";
import Expert from "@/components/home/expert";
import Stats from "@/components/stats";
export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Trust />
      <About />
      <Banner />
      <Expert />
      <ContactUs />
    </div>
  );
}
