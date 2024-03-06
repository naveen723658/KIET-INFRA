import ContactUs from "@/components/contactus";
import Hero from "@/components/hero";
import Trust from "@/components/home/Trust";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Hero />
      <Trust />
      <ContactUs />
    </div>
  );
}
