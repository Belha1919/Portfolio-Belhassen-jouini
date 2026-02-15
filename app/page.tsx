"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="grid-bg relative min-h-screen bg-bg-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Methodology />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
