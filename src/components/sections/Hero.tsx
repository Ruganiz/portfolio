"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { motion } from "framer-motion";

export default function Hero() {
  const ctaItems = [
    { label: "Ver Projetos", href: "#projetos", primary: true },
    { label: "Contate-me", href: "#contato", primary: false },
  ];

  return (
    <section
      id="home"
      aria-labelledby="portfolio-title"
      className="
        relative
        flex
        w-screen
        min-h-[92vh]
        pb-32
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-[104px]
      "
    >
      {/* Background Base */}
      <div className="absolute inset-0 bg-[#07070b]" />

      {/* Main Ambient Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(115,113,252,0.18),transparent_45%)]
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7371fc]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Noise / Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:72px_72px]
          pointer-events-none
        "
      />

      {/* Bottom Fade Transition */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-48
          w-full
          bg-gradient-to-b
          from-transparent
          to-[#0b0b11]
          pointer-events-none
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            mb-8
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-5
            py-3
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >
          <div className="relative flex h-3 w-3">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-[#52e493]
                opacity-75
              "
            />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#52e493]" />
          </div>

          <span className="text-sm font-medium tracking-wide text-white">
            Ativo para projetos
          </span>
        </motion.div>

        {/* Title */}
        <div className="flex flex-col items-center">
          <ScrollFloat
            containerClassName="m-0"
            textClassName="
              text-center
              uppercase
              leading-[0.9]
              font-bold
              text-white
              font-[family-name:var(--font-barlow-condensed)]
              text-6xl
              md:text-8xl
              lg:text-[10rem]
              drop-shadow-[0_0_40px_rgba(255,255,255,0.04)]
            "
          >
            VINICIUS
          </ScrollFloat>
          <ScrollFloat
            containerClassName="m-0"
            textClassName="
              text-center
              uppercase
              leading-[0.9]
              font-bold
              text-white
              font-[family-name:var(--font-barlow-condensed)]
              text-6xl
              md:text-8xl
              lg:text-[10rem]
              drop-shadow-[0_0_40px_rgba(255,255,255,0.04)]
            "
          >
            RUGANI
          </ScrollFloat>
        </div>

        {/* Subtitle */}
        <div className="mt-6">
            <ScrollFloat
            animationDuration={1.2}
            textClassName="
                text-lg
                md:text-2xl
                uppercase
                tracking-[0.35em]
                text-zinc-400
                font-[family-name:var(--font-barlow)]
            "
            >
            Full Stack Developer
            </ScrollFloat>
        </div>

        {/* Description */}
        <ScrollFloat
          tag="p"
          delay={0.6}
          animationDuration={1}
          textClassName="
            mt-8
            max-w-2xl
            text-base
            md:text-lg
            leading-relaxed
            text-zinc-400
            font-[family-name:var(--font-inter)]
          "
        >
          Desenvolvedor focado em criar interfaces modernas, experiências premium e aplicações performáticas utilizando React, Next.js, TypeScript e TailwindCSS.
        </ScrollFloat>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            sm:flex-row
          "
        >
          {ctaItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                group
                relative
                inline-flex
                h-16
                min-w-[220px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                px-8
                transition-all
                duration-300
                ${item.primary
                  ? `
                      border-[#7371fc]/30
                      bg-[#7371fc]
                      text-white
                      hover:scale-[1.03]
                      hover:shadow-[0_10px_40px_rgba(115,113,252,0.35)]
                    `
                  : `
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      text-white
                      hover:border-[#7371fc]/40
                      hover:bg-white/[0.06]
                    `
                }
              `}
            >
              <span className="text-base font-medium tracking-wide">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sobre"
          aria-label="Rolar para a próxima seção"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            backdrop-blur-xl
            text-white
            transition-all
            duration-300
            hover:scale-[1.03]
          "
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}