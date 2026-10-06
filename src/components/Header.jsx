"use client";
import { useEffect, useState, useRef } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const ref = useRef(null);
  useEffect(() => {
    const closeOutside = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false);
    };
    const closeEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeEscape);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.removeEventListener("click", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, []);
  return (
    <header ref={ref} className="header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="ESM Empreiteira — início"
        >
          <img src="/assets/logo.png" alt="" width="60" height="60" />
          <span>
            ESM<small>EMPREITEIRA</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span></span>
          <span></span>
        </button>
        <nav
          className={open ? "open" : ""}
          onClick={() => setOpen(false)}
          id="nav"
          aria-label="Navegação principal"
        >
          <a className={active === "inicio" ? "active" : ""} href="#inicio">
            Início
          </a>
          <a className={active === "servicos" ? "active" : ""} href="#servicos">
            Serviços
          </a>
          <a
            className={active === "equipamentos" ? "active" : ""}
            href="#equipamentos"
          >
            Equipamentos
          </a>
          <a className={active === "sobre" ? "active" : ""} href="#sobre">
            Sobre a ESM
          </a>
          <a href="#contato" className="button small">
            Vamos conversar <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
