import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import InteractiveBubble from "@/components/main/InteractiveBubble";
import Image from "next/image";
import GradientBg from "@/components/main/Gradientbg";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
