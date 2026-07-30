"use client";

import { useState, useRef } from "react";
import { Send, Paperclip, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vinicius-rugani",
    icon: FaLinkedin,
    description: "Minha trajetória profissional",
  },
  {
    name: "GitHub",
    href: "https://github.com/ruganiz",
    icon: FaGithub,
    description: "Projetos e código-fonte",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/resend/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        setFileName(null);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contato"
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
          -translate-x-1/2
          w-[700px]
          h-[700px]
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
          gap-24
        "
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-paleta-rugani-brand-light
            "
          >
            Contact
          </span>

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
            Vamos Conversar
          </ScrollFloat>

          <ScrollFloat
            tag="p"
            delay={0.2}
            textClassName="
              max-w-2xl
              text-lg
              leading-relaxed
              text-paleta-rugani-text-secondary
              font-[family-name:var(--font-inter)]
              text-center
            "
          >
            Estou sempre aberto a novas oportunidades, colaborações em projetos open-source e discussões sobre tecnologia, design e desenvolvimento moderno.
          </ScrollFloat>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Social Cards (Left Column on large screens) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            className="
              lg:col-span-5
              flex
              flex-col
              gap-6
            "
          >
            {socialLinks.map(({ name, href, icon: Icon, description }) => (
              <motion.a
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-paleta-rugani-bg-elevated/70
                  backdrop-blur-xl
                  p-8
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

                <div className="relative z-10 flex items-center gap-6">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-16
                      h-16
                      shrink-0
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-md
                    "
                  >
                    <Icon
                      className="
                        w-7
                        h-7
                        text-paleta-rugani-brand-light
                      "
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3
                      className="
                        text-2xl
                        font-semibold
                        text-paleta-rugani-text-primary
                      "
                    >
                      {name}
                    </h3>
                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-paleta-rugani-text-secondary
                      "
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form (Right Column on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="
              lg:col-span-7
              relative
              rounded-[2rem]
              border
              border-white/10
              bg-paleta-rugani-bg-elevated/70
              backdrop-blur-xl
              p-8
              md:p-10
            "
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-paleta-rugani-text-secondary">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="
                      w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                      text-paleta-rugani-text-primary placeholder:text-paleta-rugani-text-muted
                      focus:border-paleta-rugani-brand-default focus:ring-1 focus:ring-paleta-rugani-brand-default
                      outline-none transition-all
                    "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-paleta-rugani-text-secondary">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="
                      w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                      text-paleta-rugani-text-primary placeholder:text-paleta-rugani-text-muted
                      focus:border-paleta-rugani-brand-default focus:ring-1 focus:ring-paleta-rugani-brand-default
                      outline-none transition-all
                    "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="objective" className="text-sm font-medium text-paleta-rugani-text-secondary">
                  Objetivo
                </label>
                <input
                  type="text"
                  id="objective"
                  name="objective"
                  required
                  placeholder="Ex: Proposta de Freelance, Dúvida, etc."
                  className="
                    w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                    text-paleta-rugani-text-primary placeholder:text-paleta-rugani-text-muted
                    focus:border-paleta-rugani-brand-default focus:ring-1 focus:ring-paleta-rugani-brand-default
                    outline-none transition-all
                  "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-paleta-rugani-text-secondary">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Como posso te ajudar?"
                  className="
                    w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                    text-paleta-rugani-text-primary placeholder:text-paleta-rugani-text-muted
                    focus:border-paleta-rugani-brand-default focus:ring-1 focus:ring-paleta-rugani-brand-default
                    outline-none transition-all resize-none
                  "
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="
                      flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                      border border-white/10 bg-white/5 hover:bg-white/10
                      text-paleta-rugani-text-secondary hover:text-paleta-rugani-text-primary
                      cursor-pointer transition-all w-full sm:w-auto
                    "
                  >
                    <Paperclip className="w-4 h-4" />
                    <span className="text-sm truncate max-w-[150px]">
                      {fileName || "Anexar Arquivo"}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="
                    flex items-center justify-center gap-2 px-8 py-3 rounded-xl
                    bg-paleta-rugani-brand-default text-white font-medium
                    hover:bg-paleta-rugani-brand-light hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all w-full sm:w-auto
                  "
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Enviado</span>
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Erro</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            pt-10
            border-t
            border-white/5
          "
        >
          <p
            className="
              text-sm
              text-paleta-rugani-text-muted
            "
          >
            © {new Date().getFullYear()} Vinícius Rugani
          </p>

          <p
            className="
              text-sm
              text-paleta-rugani-text-muted
            "
          >
            Construído com Next.js, React e TailwindCSS.
          </p>
        </footer>
      </div>
    </section>
  );
}

