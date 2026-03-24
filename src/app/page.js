import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specializations from "@/components/Specializations";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specializations />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
