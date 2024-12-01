"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const Topbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

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

    // Função para rolagem suave
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
        
            className={`flex justify-between items-center px-28 bg-transparent sticky top-0 transition-transform duration-300 topbar shadow-lg   ${
                isVisible ? "translate-y-0 shadow-sm " : "-translate-y-full "
            }`}
        >
            <Image src={"/"} width={100} height={100} alt="Logo" />
            <motion.section className="flex gap-5 items-center" initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
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
                    <li className="gray">
                        <span className="green text-sm">04.</span>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="font-medium hover:text-[var(--green)]"
                        >
                            Contato
                        </button>
                    </li>
                </ul>
                <Button label="Resume" />
            </motion.section>
        </nav>
    );
};

export default Topbar;
