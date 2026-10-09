"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { equipment } from "../lib/equipment";
import { whatsappUrl } from "../lib/contact";

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const categories = [
  ["todos", "Todos"],
  ["estrutura", "Estrutura"],
  ["ferramentas", "Elétricas"],
  ["manuais", "Manuais"],
  ["oficina", "Oficina"],
];
export default function EquipmentCatalog() {
  const [filter, setFilter] = useState("todos");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [position, setPosition] = useState(0);
  const track = useRef(null);
  const items = equipment.filter(
    (item) =>
      (filter === "todos" || item.category === filter) &&
      normalize(`${item.name} ${item.description}`).includes(
        normalize(query.trim()),
      ),
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setPlaying(false);
    };
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.1 },
    );
    if (track.current) observer.observe(track.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setPosition(0);
    track.current?.scrollTo({ left: 0, behavior: "instant" });
  }, [filter, query]);
  function move(direction, automatic = false) {
    const element = track.current;
    if (!element || !element.children.length) return;
    const first = element.children[0];
    const step = element.children[1]
      ? element.children[1].offsetLeft - first.offsetLeft
      : first.offsetWidth;
    const max = element.scrollWidth - element.clientWidth;
    const target =
      direction > 0
        ? element.scrollLeft >= max - 2
          ? 0
          : Math.min(max, element.scrollLeft + step)
        : element.scrollLeft <= 2
          ? max
          : Math.max(0, element.scrollLeft - step);
    element.scrollTo({
      left: target,
      behavior:
        reducedMotion || Math.abs(target - element.scrollLeft) > step * 2
          ? "instant"
          : "smooth",
    });
    if (!automatic) setPlaying(false);
  }
  useEffect(() => {
    if (!playing || hovered || hidden || !inView || items.length < 2) return;
    const timer = window.setInterval(() => move(1, true), 4200);
    return () => window.clearInterval(timer);
  }, [
    playing,
    hovered,
    hidden,
    inView,
    reducedMotion,
    filter,
    query,
    items.length,
  ]);
  function updatePosition() {
    const element = track.current;
    const step = element?.children[1]
      ? element.children[1].offsetLeft - element.children[0].offsetLeft
      : 1;
    setPosition(Math.round((element?.scrollLeft || 0) / step));
  }
  function selectFilter(value) {
    setFilter(value);
    setPlaying(false);
  }

  return (
    <>
      <div className="catalog-toolbar">
        <div className="filters" role="group" aria-label="Filtrar equipamentos">
          {categories.map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "selected" : ""}
              data-filter={value}
              aria-pressed={filter === value}
              onClick={() => selectFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            id="equipment-search"
            placeholder="Buscar equipamento"
            aria-label="Buscar equipamento"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPlaying(false);
            }}
          />
        </label>
      </div>
      <div
        className="equipment-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Ferramentas e equipamentos"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={(event) => {
          if (!event.target.closest(".carousel-play")) setPlaying(false);
        }}
      >
        <div className="carousel-heading">
          <p>
            <span className="carousel-dot" /> <strong>{items.length}</strong>{" "}
            {items.length === 1
              ? "equipamento para conhecer"
              : "equipamentos para conhecer"}
          </p>
          <div className="carousel-controls">
            <button
              className="carousel-play"
              type="button"
              aria-label={playing ? "Pausar carrossel" : "Reproduzir carrossel"}
              onClick={() => setPlaying((value) => !value)}
              aria-controls="equipment-grid"
            >
              <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>{" "}
              {playing ? "Pausar" : "Reproduzir"}
            </button>
            <button
              type="button"
              aria-label="Equipamentos anteriores"
              onClick={() => move(-1)}
              aria-controls="equipment-grid"
              disabled={items.length < 2}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Próximos equipamentos"
              onClick={() => move(1)}
              aria-controls="equipment-grid"
              disabled={items.length < 2}
            >
              →
            </button>
          </div>
        </div>
        <div
          className="equipment-grid equipment-track"
          id="equipment-grid"
          role="list"
          ref={track}
          onScroll={updatePosition}
          onPointerDown={() => setPlaying(false)}
          onWheel={() => setPlaying(false)}
        >
          {items.map((item) => (
            <article key={item.name} className="equipment-card" role="listitem">
              <div className="equipment-image">
                <Image
                  src={`/assets/${item.image}`}
                  alt={item.name}
                  width={320}
                  height={260}
                  sizes="(max-width: 520px) 75vw, (max-width: 760px) 45vw, 280px"
                />
              </div>
              <div className="equipment-info">
                <small>
                  {categories.find(([value]) => value === item.category)?.[1]}
                </small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.use && (
                  <div className="equipment-use">
                    <span aria-hidden="true">↳</span> {item.use}
                  </div>
                )}
                <a
                  className="equipment-consult"
                  href={whatsappUrl(
                    `Olá, ESM! Gostaria de consultar o equipamento ${item.name}. Quais são as condições e a disponibilidade?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar ${item.name}`}
                >
                  Consultar equipamento <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        {items.length > 0 && (
          <div className="carousel-footer">
            <span>
              Arraste para explorar <span aria-hidden="true">↔</span>
            </span>
            <div className="carousel-progress" aria-hidden="true">
              <span
                style={{
                  width: `${Math.max(5, ((position + 1) / items.length) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
      <p className="empty-state" role="status" hidden={items.length > 0}>
        Nenhum equipamento encontrado. Tente outro nome ou categoria.
      </p>
    </>
  );
}
