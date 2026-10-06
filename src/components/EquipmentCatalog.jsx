"use client";
import Image from "next/image";
import { useState } from "react";
import { equipment } from "../lib/equipment";
import { whatsappUrl } from "../lib/contact";

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export default function EquipmentCatalog() {
  const [filter, setFilter] = useState("todos");
  const [query, setQuery] = useState("");
  const items = equipment.filter(
    (item) =>
      (filter === "todos" || item.category === filter) &&
      normalize(`${item.name} ${item.description}`).includes(
        normalize(query.trim()),
      ),
  );
  return (
    <>
      <div className="catalog-toolbar">
        <div className="filters" role="group" aria-label="Filtrar equipamentos">
          {[
            ["todos", "Todos"],
            ["estrutura", "Estrutura"],
            ["ferramentas", "Ferramentas"],
          ].map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "selected" : ""}
              data-filter={value}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
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
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="equipment-grid" id="equipment-grid">
        {items.map((item) => (
          <article key={item.name} className="equipment-card">
            <div className="equipment-image">
              <Image
                src={`/assets/${item.image}`}
                alt={item.name}
                width={220}
                height={190}
                sizes="(max-width: 760px) 45vw, (max-width: 1100px) 30vw, 220px"
              />
            </div>
            <div className="equipment-info">
              <small>
                {item.category === "estrutura"
                  ? "Para sua obra"
                  : "Para o acabamento"}
              </small>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
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
      <p className="empty-state" role="status" hidden={items.length > 0}>
        Nenhum equipamento encontrado. Tente outro nome ou categoria.
      </p>
    </>
  );
}
