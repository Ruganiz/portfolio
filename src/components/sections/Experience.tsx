"use client";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="
        w-full
        min-h-screen
        flex
        justify-center
        pt-24
        pb-24
      "
    >
      <div className="w-full max-w-7xl px-6 flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="uppercase tracking-[0.3em] text-sm text-paleta-rugani-brand-light">
            Trajetória
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
            Minha Experiência
          </ScrollFloat>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col gap-4 p-8 rounded-[2rem] border border-paleta-rugani-border-default bg-paleta-rugani-bg-elevated/70 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-paleta-rugani-brand-default/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paleta-rugani-brand-default/10 text-paleta-rugani-brand-light">
                    <FaBriefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-paleta-rugani-text-primary font-[family-name:var(--font-barlow)]">
                      Minha Experiência
                    </h3>
                  </div>
                </div>
                <div className="mt-2">
                  <ScrollFloat
                    tag="p"
                    delay={0.2}
                    textClassName="text-lg text-paleta-rugani-text-secondary leading-relaxed font-[family-name:var(--font-inter)] text-left"
                  >
                    Minha experiência profissional consiste em estudar, criar projetos e aprender novas tecnologias. Por enquanto, não há experiência profissional para documentação, mas vale ressaltar que busco sempre melhorias no meu código e sigo estudando.
                  </ScrollFloat>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col gap-4 p-8 rounded-[2rem] border border-paleta-rugani-border-default bg-paleta-rugani-bg-elevated/70 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-paleta-rugani-brand-default/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paleta-rugani-brand-default/10 text-paleta-rugani-brand-light">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-paleta-rugani-text-primary font-[family-name:var(--font-barlow)]">
                      Formação Acadêmica
                    </h3>
                    <p className="text-paleta-rugani-brand-light font-medium">Ciência da Computação - UNIFEOB</p>
                  </div>
                </div>
                <div className="mt-2">
                  <ScrollFloat
                    tag="p"
                    delay={0.4}
                    textClassName="text-lg text-paleta-rugani-text-secondary leading-relaxed font-[family-name:var(--font-inter)] text-left"
                  >
                    Atualmente, estou fazendo o curso de Ciências da Computação na UNIFEOB, localizada em São João da Boa Vista - SP, com previsão de término para Dezembro de 2029.
                  </ScrollFloat>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
