import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

import alexandreAsset from "../assets/original/alexandre.png.asset.json";
import googleAsset from "../assets/original/google.png.asset.json";
import metaAsset from "../assets/original/meta.png.asset.json";
import googleAdsAsset from "../assets/original/google-ads.png.asset.json";

const whatsapp = "https://wa.me/message/WVU5XLXAMEY4K1";

const services = [
  { n: "01", title: "Google Ads: Domínio do Topo", text: "Se o cliente buscou, você apareceu em 1º. Simples. Colocamos sua marca na frente de quem já decidiu comprar, antes que ele veja o seu concorrente." },
  { n: "02", title: "Landing Pages: Máquinas de Vender", text: 'Clique no Google custa dinheiro, e eu não gosto de jogar dinheiro fora. Por isso, criamos páginas que não servem para ser "lindas", servem para converter. É design pensado para fazer o sujeito ler, desejar e clicar no seu WhatsApp antes que ele pense em fechar a aba.' },
  { n: "03", title: "Google Meu Negócio: Dono do Pedaço", text: "De que adianta ser bom se ninguém te acha na sua própria rua? A gente faz sua empresa saltar nos olhos de quem busca localmente. É para você ser a primeira opção do mapa, gerar ligação e visita de quem está perto e quer resolver o problema agora." },
  { n: "04", title: "Escala: O Jogo do Lucro", text: "Paramos de adivinhar e começamos a lucrar. Escalamos o que funciona para que o Google se torne sua fonte previsível de novos clientes." },
];

const testimonials = [
  { quote: "O WhatsApp aqui agora não para, é orçamento todo dia. O cara manja demais, recomendo de olhos fechados!", name: "João Paulo", company: "JP Estética Automotiva" },
  { quote: "Os resultados estão nos agradando muito", name: "Pit Stop Automotivo", company: "" },
  { quote: "Gente, o resultado veio muito mais rápido do que eu esperava. Na primeira semana a gente já sentiu a diferença no movimento da loja e no site.", name: "Marina", company: "Loja Up Style" },
  { quote: "Muito bom serviço, estou gostando muito!", name: "Marcos Vinícius", company: "MV Ar Condicionado" },
];

const keywords = ["GOOGLE ADS", "GESTÃO DE TRÁFEGO", "ESTRATÉGIA DE CRESCIMENTO", "GOOGLE MEU NEGÓCIO", "MARKETING DE PERFORMANCE", "LANDING PAGES", "CONVERSÃO", "LEADS QUALIFICADOS", "NEGÓCIOS LOCAIS", "VENDAS NO GOOGLE"];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Alexandre Marins | Google Ads e Marketing Digital" },
    { name: "description", content: "Estratégias de Google Ads, Google Meu Negócio e landing pages para atrair clientes e aumentar vendas." },
    { property: "og:title", content: "Alexandre Marins | Google Ads e Marketing Digital" },
    { property: "og:description", content: "Transforme o Google em um canal previsível de vendas para sua empresa." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Cta({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return <a href={whatsapp} target="_blank" rel="noreferrer" className={`cta ${dark ? "cta-dark" : "cta-light"}`}>{children}<ArrowRight size={16} /></a>;
}

function Index() {
  const [testimonial, setTestimonial] = useState(0);
  const active = testimonials[testimonial];
  const move = (direction: number) => setTestimonial((testimonial + direction + testimonials.length) % testimonials.length);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#top" className="brand">MARINS</a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="header-cta">WhatsApp <ArrowRight size={15} /></a>
      </header>

      <section id="top" className="hero grid-bg">
        <div className="hero-copy">
          <h1>Atraia clientes<br />todos os dias usando<br /><span>Google Ads</span></h1>
          <p>Mais <strong>clientes todos</strong> os dias com estratégias que colocam sua empresa no <strong>topo do Google</strong>, no momento <strong>exato da compra.</strong></p>
          <Cta>Receber uma análise gratuita</Cta>
          <small>Resposta em até 5 min no WhatsApp</small>
        </div>
        <div className="hero-visual" aria-label="Alexandre Marins, especialista em tráfego pago">
          <img className="google-logo" src={googleAsset.url} alt="Google" />
          <img className="meta-logo" src={metaAsset.url} alt="Meta" />
          <img className="person" src={alexandreAsset.url} alt="Alexandre Marins" />
          <div className="nameplate"><strong>Alexandre Marins</strong><span>Especialista em Tráfego Pago</span></div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track">{[...keywords, ...keywords].map((word, i) => <span key={`${word}-${i}`}>{word}<Plus size={13} /></span>)}</div></div>

      <section className="dark-section">
        <div className="dark-intro">
          <div><p className="eyebrow"><i /> O que realmente importa</p><h2>Ou você domina o topo do Google, ou entrega seus clientes de bandeja para o concorrente.</h2></div>
          <div className="dark-copy"><p>Chega de relatórios bonitinhos que não pagam seus boletos. O plano aqui é simples: colocar sua empresa onde o dinheiro está. Se o seu cliente busca o que você vende e não te encontra em 1º lugar, você está financiando o lucro do seu vizinho. Vamos resolver isso?</p><Cta dark={false}>Quero dominar o topo</Cta></div>
        </div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      </section>

      <section className="stats-section">
        <div className="stats-heading"><p className="eyebrow"><i /> Especialistas em Google</p><h2>Transformamos o Google em um canal previsível de vendas para empresas.</h2></div>
        <div className="stats-grid"><div><strong className="big-stat">500k+</strong><p>Gerados em faturamento com estratégias de Google Ads e Google Meu Negócio.</p></div><div className="stats-copy"><p>Hoje, o Google é o principal ponto de decisão de compra.</p><p>Criamos campanhas inteligentes no Google Ads, fortalecemos sua presença no Google Meu Negócio e desenvolvemos páginas que convertem visitas em clientes.</p><Cta>Descubra como vender pelo Google</Cta></div></div>
        <div className="feature-image"><img src={googleAdsAsset.url} alt="Página de captura e vendas" /><span>PÁGINAS DE CAPTURA: MÁQUINAS DE VENDAS</span></div>
      </section>

      <section className="testimonials">
        <div className="testimonial-head"><div><p className="eyebrow"><i /> Depoimentos</p><h2>O que as pessoas estão falando sobre nós</h2></div><div className="slider-controls"><button onClick={() => move(-1)} aria-label="Depoimento anterior"><ArrowLeft /></button><button onClick={() => move(1)} aria-label="Próximo depoimento"><ArrowRight /></button></div></div>
        <article className="testimonial-card"><div className="quote-mark">“</div><p>{active.quote}</p><div className="rating" aria-label="5 estrelas">★★★★★</div><div><strong>{active.name}</strong><span>{active.company}</span></div></article>
        <div className="dots">{testimonials.map((_, i) => <button key={i} aria-label={`Ver depoimento ${i + 1}`} className={i === testimonial ? "active" : ""} onClick={() => setTestimonial(i)} />)}</div>
      </section>

      <section className="sell-marquee"><div>Venda todos os dias com o Google, Venda todos os dias com o Google,</div><div>Venda todos os dias com o Google, Venda todos os dias com o Google,</div></section>

      <footer>
        <div className="footer-top"><div className="footer-call"><span className="footer-mark">M</span><h2>Gostou do que viu?</h2><p>Vamos trabalhar juntos para transformar o projeto dos seus sonhos em realidade.</p><a href={whatsapp} target="_blank" rel="noreferrer">Fale Conosco <ArrowRight size={16} /></a></div><div><h3>Links Úteis</h3><a href="#top">Sobre</a></div><div><h3>Informações</h3><a href={whatsapp}>Entre em Contato</a><a href="#top">Política de Privacidade</a></div><div><h3>Redes sociais</h3><p>Conecte-se conosco através das nossas redes sociais.</p></div></div>
        <div className="footer-name">ALEXANDRE MARINS</div><div className="copyright">© All Right Reserved by Alexandre Marins - 2026</div>
      </footer>
    </main>
  );
}