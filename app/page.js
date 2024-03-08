import ContactUs from "@/components/contactus";
import Hero from "@/components/hero";
import About from "@/components/home/About";
import Trust from "@/components/home/Trust";
import Banner from "@/components/home/banner";
import Expert from "@/components/home/expert";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trust />
      <About />
      <Banner />
      <Expert />
      <ContactUs />
    </div>
  );
}
