"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

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
            className={`flex justify-between items-center px-28 bg-transparent sticky top-0 transition-transform duration-300 topbar  ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Image src={"/"} width={100} height={100} alt="Logo" />
            <section className="flex gap-5 items-center">
                <ul className="flex gap-5">
                    <li className="gray">
                        <span className="green text-sm">01.</span>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="font-medium hover:text-[var(--green)]"
                        >
                            About
                        </button>
                    </li>
                    <li className="gray">
                        <span className="green text-sm">02.</span>
                        <button
                            onClick={() => scrollToSection("experience")}
                            className="font-medium hover:text-[var(--green)]"
                        >
                            Experience
                        </button>
                    </li>
                    <li className="gray">
                        <span className="green text-sm">03.</span>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="font-medium hover:text-[var(--green)]"
                        >
                            Work
                        </button>
                    </li>
                    <li className="gray">
                        <span className="green text-sm">04.</span>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="font-medium hover:text-[var(--green)]"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
                <Button label="Resume" />
            </section>
        </nav>
    );
};

export default Topbar;
