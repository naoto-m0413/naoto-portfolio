import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Apps } from "@/components/sections/Apps";
import { Works } from "@/components/sections/Works";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Apps />
        <Works />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
