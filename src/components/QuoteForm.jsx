"use client";
import { useEffect, useState } from "react";
import { whatsappUrl } from "../lib/contact";
export default function QuoteForm() {
  const [service, setService] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const selectService = (event) => {
      const link = event.target.closest("[data-service]");
      if (link) setService(link.dataset.service);
    };
    document.addEventListener("click", selectService);
    return () => document.removeEventListener("click", selectService);
  }, []);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name").trim();
    const location = data.get("location").trim();
    const message = data.get("message").trim();
    if (!name || !location || !message) {
      setError("Preencha seu nome, a localização e os detalhes da ideia.");
      return;
    }
    setError("");
    const nextUrl = whatsappUrl(
      `Olá, ESM! Gostaria de solicitar um orçamento.\n\nNome: ${name}\nLocal: ${location}\nServiço: ${service}\n\nMinha ideia: ${message}`,
    );
    setUrl(nextUrl);
    window.open(nextUrl, "_blank", "noopener,noreferrer");
  }
  return (
    <form id="quote-form" onSubmit={submit} className="quote-form reveal">
      <h3>Vamos falar da sua obra.</h3>
      <div className="form-row">
        <label>
          Seu nome
          <input
            name="name"
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            required
            maxLength="100"
          />
        </label>
        <label>
          Cidade / bairro
          <input
            name="location"
            autoComplete="address-level2"
            placeholder="Onde será o serviço?"
            required
            maxLength="150"
          />
        </label>
      </div>
      <label>
        O que você precisa?
        <select
          name="service"
          id="service-select"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        >
          <option value="">Selecione um serviço</option>
          <option>Construção civil</option>
          <option>Reformas e alvenaria</option>
          <option>Pintura</option>
          <option>Impermeabilização</option>
          <option>Equipamentos</option>
          <option>Outro serviço</option>
        </select>
      </label>
      <label>
        Conte um pouco da sua ideia
        <textarea
          name="message"
          rows="3"
          placeholder="O que você quer construir ou transformar?"
          required
          maxLength="2000"
        ></textarea>
      </label>
      <button className="button" type="submit">
        Continuar no WhatsApp <span>↗</span>
      </button>
      <p className="form-note">
        Os dados serão incluídos na mensagem. Você revisa e envia no WhatsApp.
      </p>
      <p id="form-status" role="status">
        {error ||
          (url && (
            <>
              Sua mensagem está pronta.{" "}
              <a href={url} target="_blank" rel="noopener noreferrer">
                Abrir conversa no WhatsApp
              </a>
            </>
          ))}
      </p>
    </form>
  );
}
