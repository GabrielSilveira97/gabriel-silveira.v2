"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // fecha o menu ao clicar
    }
  };

  return (
    <nav
      className={`flex justify-between items-center w-full px-6 sm:px-28 py-5 bg-transparent sticky top-0 transition-transform duration-300 topbar z-50 ${
        isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
      }`}
    >
      <button
        className="logo rounded-full text-xl font-bold"
        onClick={() => scrollToSection("home")}
      >
        GS
      </button>

      {/* Botão do Menu (mobile only) */}
      <button
        className="sm:hidden text-[var(--slate-light)]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Desktop */}
      <motion.section
        className="hidden sm:flex gap-5 items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ul className="flex gap-5">
          <li className="gray">
            <span className="green text-sm">01.</span>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium hover:text-[var(--green)]"
            >
              Sobre
            </button>
          </li>
          <li className="gray">
            <span className="green text-sm">02.</span>
            <button
              onClick={() => scrollToSection("experience")}
              className="font-medium hover:text-[var(--green)]"
            >
              Experiência
            </button>
          </li>
          <li className="gray">
            <span className="green text-sm">03.</span>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-medium hover:text-[var(--green)]"
            >
              Projetos
            </button>
          </li>
        </ul>
        <Button target="_blank" link="/cv-gabriel-silveira.pdf" label="Resume" />
      </motion.section>

      {/* Menu Mobile (dropdown) */}
      {menuOpen && (
        <motion.div
          className="sm:hidden absolute top-full left-0 w-full bg-[var(--background)] px-6 py-4 shadow-lg z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4">
            <li className="gray">
              <button
                onClick={() => scrollToSection("about")}
                className="font-medium hover:text-[var(--green)]"
              >
                Sobre
              </button>
            </li>
            <li className="gray">
              <button
                onClick={() => scrollToSection("experience")}
                className="font-medium hover:text-[var(--green)]"
              >
                Experiência
              </button>
            </li>
            <li className="gray">
              <button
                onClick={() => scrollToSection("projects")}
                className="font-medium hover:text-[var(--green)]"
              >
                Projetos
              </button>
            </li>
            <li>
              <Button target="_blank" link="'/cv-gabriel-silveira.pdf'" label="Resume" />
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Topbar;
