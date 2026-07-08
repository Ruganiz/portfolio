import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        overflow-hidden
        bg-[#07070b]
      "
    >
      {/* Global Ambient Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#7371fc]/10
            blur-3xl
          "
        />

        {/* Mid Glow */}
        <div
          className="
            absolute
            right-[-200px]
            top-[35%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#7371fc]/[0.08]
            blur-3xl
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[-200px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#7371fc]/[0.06]
            blur-3xl
          "
        />

        {/* Noise Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}