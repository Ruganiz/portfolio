"use client";

import ScrollFloat from "@/components/animations/ScrollFloat";
import { motion } from "framer-motion";
import { EmblaCarousel } from "../func/Embla-Roll.";
import { DevYear } from "@/components/func/year";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss } from "react-icons/si";

const techSkills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="
        w-full
        min-h-screen
        flex
        justify-center
        pt-0
        pb-24
      "
    >
      <div className="w-full max-w-7xl flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="uppercase tracking-[0.3em] text-sm text-paleta-rugani-brand-light">
            Sobre Mim
          </span>

          <ScrollFloat
            containerClassName="m-0"
            textClassName="
              text-5xl
              md:text-7xl
              font-bold
              uppercase
              leading-none
              text-paleta-rugani-text-primary
              font-[family-name:var(--font-barlow-condensed)]
            "
          >
            Full Stack Developer
          </ScrollFloat>
        </div>

        {/* Main Content */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[580px]"
          >

            <div
              className="
                absolute
                inset-0
                rounded-[2rem]
                bg-paleta-rugani-brand-default/5
                opacity-70
                blur-3xl
              "
            />

            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-paleta-rugani-bg-elevated/80
                backdrop-blur-sm
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
            <EmblaCarousel />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  backdrop-blur-md
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                "
              >
                <p className="text-white text-lg font-semibold">
                  Vinícius Rugani
                </p>

                <p className="text-white/70 text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-5">
              <ScrollFloat
                animationDuration={1}
                textClassName="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-paleta-rugani-text-primary
                  font-[family-name:var(--font-barlow)]
                "
              >
                Desenvolvedor focado em criar experiências modernas e funcionais.
              </ScrollFloat>

              <div className="mt-2">
                <ScrollFloat
                  tag="p"
                  delay={0.2}
                  textClassName="text-lg leading-relaxed text-paleta-rugani-text-secondary font-[family-name:var(--font-inter)] text-left"
                >
                  {`Me chamo Vinícius Rugani, tenho ${DevYear()} anos e curso Ciência da Computação. Tenho foco em desenvolvimento full-stack, criando soluções práticas e eficientes para todos os públicos`}
                </ScrollFloat>
              </div>
            </div>

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {techSkills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-2xl
                    border
                    border-paleta-rugani-border-default
                    bg-paleta-rugani-bg-elevated/70
                    backdrop-blur-xl
                    transition-[border-color,box-shadow]
                    duration-300
                    hover:border-paleta-rugani-brand-default/40
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  "
                >
                  <Icon
                    className="
                      w-6
                      h-6
                      text-paleta-rugani-brand-light
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-paleta-rugani-text-secondary
                    "
                  >
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}