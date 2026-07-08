"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaRegUser,
  FaRegEnvelope,
  FaBriefcase,
} from "react-icons/fa";

import { FiCode } from "react-icons/fi";

const navItems = [
  { label: "Sobre", href: "#sobre", icon: FaRegUser },
  { label: "Projetos", href: "#projetos", icon: FiCode },
  { label: "Experiência", href: "#experiencia", icon: FaBriefcase },
  { label: "Contato", href: "#contato", icon: FaRegEnvelope },
];

const socialLinks = [
  {
    href: "https://github.com/ruganiz",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/vinicius-rugani",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        pointer-events-none
        transition-all
        duration-500
        ease-out

        before:absolute
        before:inset-0
        before:bg-gradient-to-b
        before:from-black/20
        before:to-transparent
        before:pointer-events-none

        ${scrolled ? "py-3" : "py-6 md:py-8"}
      `}
    >
      <div
        className="
          relative
          mx-auto
          flex
          items-center
          justify-between
          px-4
          md:px-8
          max-w-7xl
          pointer-events-auto
        "
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Ir para o início"
          className="
            relative
            z-10
            group
          "
        >
          <span
            className={`
              flex
              items-center
              gap-[2px]
              font-semibold
              tracking-wide
              text-white
              transition-all
              duration-500
              ${scrolled ? "text-sm" : "text-base"}
            `}
          >
            <span className="text-[#8f8dff] transition-colors duration-300 group-hover:text-[#b3b2ff]">
              &lt;/
            </span>

            rugani

            <span className="text-[#8f8dff] transition-colors duration-300 group-hover:text-[#b3b2ff]">
              &gt;
            </span>
          </span>
        </a>

        {/* Navigation */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
          "
        >
          <nav
            aria-label="Navegação principal"
            className={`
              hidden
              md:flex
              items-center
              rounded-full
              border
              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    gap-1
                    px-2
                    py-1.5
                    bg-white/[0.04]
                    border-white/[0.08]
                    shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                    backdrop-blur-2xl
                  `
                  : `
                    gap-2
                    px-3
                    py-2
                    bg-white/[0.02]
                    border-white/[0.05]
                    backdrop-blur-xl
                  `
              }
            `}
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    group
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    text-white/60
                    transition-all
                    duration-300

                    hover:bg-[#7371fc]/10
                    hover:text-[#d6d5ff]

                    ${
                      scrolled
                        ? "h-9 w-9 hover:w-24"
                        : "h-10 w-10 hover:w-28"
                    }
                  `}
                >
                  <Icon
                    className={`
                      shrink-0
                      min-w-[16px]
                      ${scrolled ? "text-sm" : "text-base"}
                    `}
                  />

                  <span
                    className={`
                      w-0
                      overflow-hidden
                      whitespace-nowrap
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:w-auto
                      group-hover:opacity-100
                      group-hover:ml-2
                      font-medium

                      ${scrolled ? "text-[11px]" : "text-xs"}
                    `}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Social */}
        <div
          className="
            relative
            z-10
            hidden
            md:flex
            items-center
            gap-3
          "
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`
                  group
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  text-white
                  transition-all
                  duration-300

                  bg-white/[0.03]
                  backdrop-blur-xl

                  hover:bg-white/[0.06]
                  hover:border-[#7371fc]/20
                  hover:text-[#d6d5ff]

                  ${
                    scrolled
                      ? "h-9 w-9 hover:w-20 text-sm hover:px-3 hover:justify-start"
                      : "h-11 w-11 hover:w-24 text-base hover:px-3 hover:justify-start"
                  }
                `}
              >
                <Icon className="shrink-0" />

                <span
                  className={`
                    w-0
                    overflow-hidden
                    whitespace-nowrap
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:w-auto
                    group-hover:opacity-100
                    group-hover:ml-2
                    font-medium

                    ${scrolled ? "text-[11px]" : "text-xs"}
                  `}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}