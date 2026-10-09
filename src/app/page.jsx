import Image from "next/image";
import Header from "../components/Header";
import EquipmentCatalog from "../components/EquipmentCatalog";
import QuoteForm from "../components/QuoteForm";
import Motion from "../components/Motion";
import StructuredData from "../components/StructuredData";
export default function Home() {
  return (
    <>
      <StructuredData />
      <Motion />
      <noscript>
        <style>{`#quote-form { display: none; } @media (max-width:760px) { .menu-toggle { display:none; } .header nav { display:flex; position:static; flex-direction:row; flex-wrap:wrap; padding:8px 0; box-shadow:none; gap:6px; } .header-inner { height:auto; flex-wrap:wrap; padding:12px 0; } }`}</style>
        <p className="noscript-note">
          Para pedir um orçamento,{" "}
          <a
            href="https://wa.me/5579998708819"
            target="_blank"
            rel="noopener noreferrer"
          >
            fale diretamente com a ESM no WhatsApp
          </a>
          .
        </p>
      </noscript>

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="topbar">
        <div className="container">
          <span>Construção e reformas em Lagarto e regiões de Sergipe.</span>
          <a href="tel:+5579998708819">
            Fale com a ESM <span>↗</span> (79) 99870-8819
          </a>
        </div>
      </div>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="hero-photo">
            <Image
              src="/assets/obra.jpg"
              alt="Profissionais trabalhando em uma obra de construção civil"
              fill
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="hero-shade"></div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow light">
                <span></span> CONSTRUÇÃO CIVIL & REFORMAS
              </p>
              <h1>
                Sua ideia.
                <br />
                Nossa próxima
                <br />
                <em>grande obra.</em>
              </h1>
              <p className="hero-description">
                Do alicerce ao acabamento, a ESM ajuda a tirar seus planos do
                papel. Construção, reformas e acabamentos em Lagarto e regiões
                de Sergipe.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contato">
                  Solicitar um orçamento <span>↗</span>
                </a>
                <a className="text-link" href="#servicos">
                  Explore nossos serviços <span>↓</span>
                </a>
              </div>
              <div className="hero-note">
                <span className="check">✓</span> Atendimento direto. Sua obra
                começa com uma boa conversa.
              </div>
            </div>
            <div className="hero-caption">
              <span className="caption-icon">↗</span>
              <div>
                <small>DA IDEIA À REALIZAÇÃO</small>
                <strong>Vamos construir juntos.</strong>
              </div>
            </div>
            <a className="scroll-hint" href="#servicos">
              ROLE PARA EXPLORAR <span>↓</span>
            </a>
          </div>
        </section>
        <div className="promise-strip">
          <div className="container">
            <span>
              <i>01</i> Construção & reforma
            </span>
            <span>
              <i>02</i> Cuidado com cada detalhe
            </span>
            <span>
              <i>03</i> Equipamentos para sua obra
            </span>
            <span>
              <i>04</i> Contato sem complicação
            </span>
          </div>
        </div>
        <section className="section container" id="servicos">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">O QUE A GENTE FAZ</p>
              <h2>
                Uma solução para
                <br />
                <span>cada etapa da sua obra.</span>
              </h2>
            </div>
            <p>
              Pequenas melhorias ou novos começos.
              <br />
              Conte com a ESM para conversar sobre o que o seu espaço precisa.
            </p>
          </div>
          <div className="service-grid">
            <a
              className="service-card reveal"
              href="#contato"
              data-service="Construção civil"
            >
              <span className="service-number">01 /</span>
              <div className="line-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="38"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m3 12 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" />
                </svg>
              </div>
              <h3>Construção civil</h3>
              <p>
                Do alicerce ao acabamento, execução de obras para transformar
                seu projeto em realidade.
              </p>
              <span className="card-link">
                Vamos construir <b>↗</b>
              </span>
            </a>
            <a
              className="service-card reveal"
              href="#contato"
              data-service="Reformas e alvenaria"
            >
              <span className="service-number">02 /</span>
              <div className="line-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="38"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 5h18v16H3zM3 10h18M3 15h18M9 5v5m6 0v5m-6 0v6" />
                </svg>
              </div>
              <h3>Reformas & alvenaria</h3>
              <p>
                Novos ambientes, reparos e serviços de pedreiro para renovar e
                aproveitar melhor seu espaço.
              </p>
              <span className="card-link">
                Renove seu espaço <b>↗</b>
              </span>
            </a>
            <a
              className="service-card reveal"
              href="#contato"
              data-service="Pintura"
            >
              <span className="service-number">03 /</span>
              <div className="line-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="38"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="15" height="6" rx="1" />
                  <path d="M18 7h3v7h-9v3m-2 0h4v5h-4z" />
                </svg>
              </div>
              <h3>Pintura</h3>
              <p>
                Preparação de superfícies e pintura de ambientes. Uma nova cor
                faz toda a diferença.
              </p>
              <span className="card-link">
                Dê vida ao ambiente <b>↗</b>
              </span>
            </a>
            <a
              className="service-card reveal"
              href="#contato"
              data-service="Impermeabilização"
            >
              <span className="service-number">04 /</span>
              <div className="line-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="38"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3s-7 8-7 12a7 7 0 0 0 14 0c0-4-7-12-7-12Z M9 15a3 3 0 0 0 3 3" />
                </svg>
              </div>
              <h3>Impermeabilização</h3>
              <p>
                Soluções para proteção contra umidade em lajes, superfícies e
                fundações.
              </p>
              <span className="card-link">
                Cuide da sua obra <b>↗</b>
              </span>
            </a>
          </div>
        </section>
        <section className="equipment-section" id="equipamentos">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">A FERRAMENTA CERTA FAZ A DIFERENÇA</p>
                <h2>
                  Mais força para
                  <br />
                  <span>o seu projeto.</span>
                </h2>
              </div>
              <p>
                Conheça os equipamentos e consulte opções,
                <br />
                condições e disponibilidade com a nossa equipe.
              </p>
            </div>
            <EquipmentCatalog />
            <p className="catalog-note">
              Imagens ilustrativas, incluindo representações geradas a partir das
              referências. Modelos, especificações e disponibilidade são
              confirmados no atendimento.
            </p>
          </div>
        </section>
        <section id="sobre" className="section container about">
          <div className="about-art reveal">
            <div className="blueprint-grid"></div>
            <img
              src="/assets/logo.png"
              alt="Logo ESM Empreiteira"
              loading="lazy"
              width="1600"
              height="1272"
            />
            <div className="about-label">
              <span>ESM</span> DE PLANOS A NOVAS POSSIBILIDADES
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">QUEM ESTÁ COM VOCÊ</p>
            <h2>
              Construir é mais
              <br />
              que levantar <span>paredes.</span>
            </h2>
            <p>
              É criar um lugar para viver, trabalhar e realizar. A ESM
              Empreiteira atende Lagarto e regiões de Sergipe com serviços de
              construção civil, reformas e acabamentos para acompanhar os planos
              de cada cliente.
            </p>
            <p>
              Acreditamos que tudo começa com escuta e clareza. Por isso,
              conversamos sobre suas necessidades, avaliamos o serviço e
              alinhamos o orçamento antes de começar.
            </p>
            <div className="about-values">
              <span>
                <b>✓</b> Conversa direta
              </span>
              <span>
                <b>✓</b> Escopo bem alinhado
              </span>
              <span>
                <b>✓</b> Atenção aos detalhes
              </span>
              <span>
                <b>✓</b> Soluções para seu espaço
              </span>
            </div>
            <a className="text-link dark" href="#contato">
              Conheça a ESM em uma conversa <span>↗</span>
            </a>
          </div>
        </section>
        <section className="process-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow light">DO PRIMEIRO CONTATO À SUA OBRA</p>
                <h2>
                  Seu próximo passo
                  <br />é <em>mais simples do que parece.</em>
                </h2>
              </div>
            </div>
            <div className="process-grid">
              <article className="reveal">
                <span>01</span>
                <h3>Conte sua ideia</h3>
                <p>
                  Fale sobre o serviço, a localização e o que você imagina para
                  o seu espaço.
                </p>
              </article>
              <article className="reveal">
                <span>02</span>
                <h3>Alinhamos os detalhes</h3>
                <p>
                  Avaliamos a necessidade de uma visita e conversamos sobre
                  escopo, condições e prazos.
                </p>
              </article>
              <article className="reveal">
                <span>03</span>
                <h3>Planejamos o começo</h3>
                <p>
                  Com o orçamento aprovado e os detalhes combinados, organizamos
                  os próximos passos.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section container faq">
          <div className="reveal">
            <p className="eyebrow">ANTES DE COMEÇAR</p>
            <h2>
              Uma boa obra
              <br />
              começa sem <span>dúvidas.</span>
            </h2>
            <p>
              Não encontrou sua resposta?
              <br />
              <a href="#contato">Converse com a gente ↗</a>
            </p>
          </div>
          <div className="faq-list reveal">
            <details>
              <summary>
                Como solicitar um orçamento?<span>+</span>
              </summary>
              <p>
                Preencha o formulário abaixo ou fale diretamente pelo WhatsApp.
                Informe o serviço, a cidade e os detalhes da sua necessidade.
                Fotos e medidas podem ajudar no atendimento.
              </p>
            </details>
            <details>
              <summary>
                Vocês fazem pequenas reformas?<span>+</span>
              </summary>
              <p>
                Você pode consultar serviços de reforma, alvenaria, pintura e
                impermeabilização. Descreva o que precisa para avaliarmos o
                escopo e a possibilidade de atendimento.
              </p>
            </details>
            <details>
              <summary>
                Como consultar os equipamentos?<span>+</span>
              </summary>
              <p>
                Clique em “Consultar equipamento” no catálogo. A conversa no
                WhatsApp abre com o nome do item para confirmar modelo,
                disponibilidade, valores e condições.
              </p>
            </details>
            <details>
              <summary>
                Qual é a região de atendimento?<span>+</span>
              </summary>
              <p>
                Atendemos Lagarto e regiões de Sergipe. Informe sua cidade e o
                bairro no primeiro contato para confirmarmos a disponibilidade e
                as condições de atendimento antes de combinar a visita ou o
                serviço.
              </p>
            </details>
            <details>
              <summary>
                Posso enviar fotos do meu projeto?<span>+</span>
              </summary>
              <p>
                Sim. Depois de abrir a conversa no WhatsApp, você pode anexar
                fotos, medidas e referências para explicar melhor o que deseja
                realizar.
              </p>
            </details>
          </div>
        </section>
        <section className="contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">VAMOS TIRAR SUA IDEIA DO PAPEL?</p>
              <h2>
                A próxima transformação
                <br />
                começa <span>aqui.</span>
              </h2>
              <p>
                Conte o que você precisa. Vamos conversar sobre a melhor forma
                de dar o próximo passo.
              </p>
              <a className="contact-line" href="tel:+5579998708819">
                <span>↗</span>
                <div>
                  <small>TELEFONE & WHATSAPP</small>
                  <strong>(79) 99870-8819</strong>
                </div>
              </a>
              <a
                className="contact-line"
                href="mailto:elvissantosgamer@gmail.com"
              >
                <span>✉</span>
                <div>
                  <small>E-MAIL</small>
                  <strong>elvissantosgamer@gmail.com</strong>
                </div>
              </a>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-top">
          <a className="brand" href="#inicio">
            <span>
              ESM<small>EMPREITEIRA</small>
            </span>
          </a>
          <p>
            Construindo espaços.
            <br />
            Transformando possibilidades.
          </p>
          <div>
            <a href="#servicos">Serviços</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#inicio" className="back-top" aria-label="Voltar ao início">
            ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © <span id="year">{new Date().getFullYear()}</span> ESM Empreiteira.
            Todos os direitos reservados.
          </span>
          <span>Do primeiro tijolo ao último detalhe.</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/5579998708819?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20uma%20obra."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a ESM no WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" />
          <path d="M8.3 7.7c-.8 2.4 3.5 6.9 6.2 6.5l1-1.6-2-1-1 1c-1.4-.5-2.5-1.6-3-3l.8-.9-.9-1.7Z" />
        </svg>
        <span>Vamos conversar</span>
      </a>
    </>
  );
}
