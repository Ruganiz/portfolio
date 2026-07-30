"use client";

import { useEffect, useState } from "react";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { motion } from "framer-motion";

import GithubContributionGrid from "../func/github-calendar";

import { ArrowUpRight, Star } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  topics: string[];
  stars: number;
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setError(null);
        const response = await fetch("/api/github/");

        if (!response.ok) {
          throw new Error("Erro ao buscar projetos");
        }

        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar os projetos. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section
      id="projetos"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-32
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-paleta-rugani-brand-default/5
          blur-3xl
          opacity-70
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          gap-28
        "
      >
        {/* Header */}
        <div className="flex flex-col gap-8">
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-paleta-rugani-brand-light
            "
          >
            Featured Work
          </span>

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-8
            "
          >
            <div className="flex flex-col gap-6">
              <ScrollFloat
                containerClassName="m-0"
                textClassName="
                  text-5xl
                  md:text-7xl
                  leading-none
                  uppercase
                  font-bold
                  text-paleta-rugani-text-primary
                  font-[family-name:var(--font-barlow-condensed)]
                "
              >
                Projetos em Destaque
              </ScrollFloat>

              <ScrollFloat
                tag="p"
                delay={0.2}
                textClassName="
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-paleta-rugani-text-secondary
                "
              >
                Alguns dos projetos que desenvolvi focando em experiência do usuário, performance e interfaces modernas.
              </ScrollFloat>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div
            className="
              flex
              items-center
              justify-center
              py-20
              text-paleta-rugani-text-secondary
            "
          >
            Carregando projetos...
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div
            className="
              flex
              items-center
              justify-center
              rounded-[2rem]
              border
              border-red-500/20
              bg-red-500/5
              py-20
              text-center
              text-red-400
            "
          >
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div
            className="
              flex
              items-center
              justify-center
              rounded-[2rem]
              border
              border-white/10
              bg-paleta-rugani-bg-elevated/50
              py-20
              text-center
              text-paleta-rugani-text-secondary
            "
          >
            Nenhum projeto encontrado.
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
            "
          >
            {projects.map((project) => (
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                key={project.id}
                href={project.homepage || project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-paleta-rugani-bg-elevated/70
                  backdrop-blur-xl
                  transition-[border-color,box-shadow]
                  duration-500
                  hover:border-paleta-rugani-brand-default/30
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-paleta-rugani-brand-default/10
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image */}
                <div
                  className="
                    relative
                    h-[260px]
                    overflow-hidden
                    bg-paleta-rugani-bg-overlay/60
                  "
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-6 p-7">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.topics?.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          backdrop-blur-md
                          px-3
                          py-1
                          text-xs
                          uppercase
                          tracking-wide
                          text-paleta-rugani-text-secondary
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-paleta-rugani-text-primary
                          font-[family-name:var(--font-barlow)]
                        "
                      >
                        {project.name}
                      </h3>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-paleta-rugani-text-secondary
                        "
                      >
                        <Star className="h-4 w-4" />

                        <span>{project.stars}</span>
                      </div>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-paleta-rugani-brand-default/30
                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-paleta-rugani-text-secondary
                    "
                  >
                    {project.description ||
                      "Sem descrição disponível."}
                  </p>

                  {/* Button */}
                  <div
                    className="
                      mt-2
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-md
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:border-paleta-rugani-brand-default/30
                      hover:bg-paleta-rugani-brand-default
                      hover:shadow-[0_10px_40px_rgba(115,113,252,0.25)]
                    "
                  >
                    Ver Projeto
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Github Activity */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-paleta-rugani-brand-light
              "
            >
              Github
            </span>

            <ScrollFloat
              containerClassName="m-0"
              textClassName="
                text-4xl
                md:text-6xl
                uppercase
                font-bold
                leading-none
                text-paleta-rugani-text-primary
                font-[family-name:var(--font-barlow-condensed)]
              "
            >
              Atividade Recente
            </ScrollFloat>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-paleta-rugani-bg-elevated/70
              backdrop-blur-xl
              p-6
              md:p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >
            <GithubContributionGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}