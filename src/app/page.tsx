import { ArrowUpRight, Check, MessageCircle, X } from "lucide-react";
import { Header } from "@/components/site/header";
import { Wordmark, Isotype } from "@/components/site/logo";
import { Reveal } from "@/components/site/reveal";
import { Countdown } from "@/components/site/countdown";
import { Faq } from "@/components/site/faq";
import { WA } from "@/lib/site";

/* ---------- content ---------- */

const PLATFORMS = [
  {
    name: "Meta Ads",
    where: "Facebook · Instagram · Messenger",
    text: "Para conseguir mensajes, contactos, visitas y ventas.",
  },
  {
    name: "Google Ads",
    where: "Búsqueda · YouTube · Display",
    text: "Apareces cuando las personas buscan lo que tu empresa ofrece.",
  },
  {
    name: "TikTok Ads",
    where: "Video corto",
    text: "Nuevos públicos con video, para impulsar interés, contactos y compras.",
  },
  {
    name: "Pinterest Ads",
    where: "Contenido visual",
    text: "Para categorías donde la inspiración influye en la compra.",
  },
];

const STEPS = [
  {
    title: "Conocemos tu negocio",
    text: "Qué vendes, a quién quieres llegar, cuál es tu oferta y qué quieres conseguir.",
  },
  {
    title: "Preparamos la publicidad",
    text: "Revisamos cuentas, organizamos campañas, definimos públicos y plataformas.",
  },
  {
    title: "Lanzamos tus anuncios",
    text: "Tu contenido frente a las personas que pueden estar interesadas.",
  },
  {
    title: "Medimos y optimizamos",
    text: "Cuánto se invierte, a cuántos llegas, qué anuncio funciona y cuánto cuesta cada resultado.",
  },
  {
    title: "Mejoramos para crecer",
    text: "Ajustamos la estrategia con datos y proponemos nuevas acciones.",
  },
];

const PLAN_ACTIVA = [
  "Administración de anuncios en 1 plataforma",
  "Hasta 3 campañas activas a la vez",
  "Segmentación de públicos y zonas",
  "Control y distribución del presupuesto",
  "Pruebas de anuncios y públicos",
  "Optimización semanal",
  "Informe mensual con recomendaciones",
];

const PLAN_PREMIUM = [
  "Diagnóstico del negocio y de tu oferta",
  "Análisis de competencia y mercado",
  "Públicos, mensajes y propuesta de valor",
  "Recorrido del cliente: del anuncio a la compra",
  "Campañas multicanal en Meta, Google y/o TikTok",
  "Medición de conversiones y remarketing",
];

const BUNDLE = [
  {
    n: "01",
    title: "Publicidad Digital Activa, cada mes",
    text: "Campañas, segmentación, optimización semanal e informe mensual.",
  },
  {
    n: "02",
    title: "Activación publicitaria incluida",
    text: "Revisamos tus activos, organizamos cuentas, vinculamos Facebook e Instagram, configuramos pagos y accesos, y dejamos listo el píxel básico.",
  },
  {
    n: "03",
    title: "Medición en lenguaje claro",
    text: "Alcance, clics, costo por contacto, conversiones y ROAS, explicados.",
  },
  {
    n: "04",
    title: "Acompañamiento",
    text: "Sabes qué se hace y por qué.",
  },
];

const FOR_YOU = [
  "Ya vendes un producto o servicio con precios definidos.",
  "Tienes contenido o material que podamos promocionar.",
  "Tienes presupuesto para publicidad.",
  "Alguien responde los mensajes y atiende a los clientes.",
  "Quieres que otro equipo maneje las plataformas.",
  "Estás dispuesto a probar, medir y mejorar.",
];

const NOT_FOR_YOU = [
  "Todavía estás con la idea y no has vendido.",
  "No piensas invertir en publicidad.",
  "Buscas un curso para aprender a hacer anuncios.",
  "Esperas campañas, cambios o solicitudes ilimitados.",
  "Esperas ventas garantizadas solo por anunciar.",
];

const IS_ISNT: [string, string][] = [
  ["Un equipo que administra tu publicidad con objetivos claros", "Un curso ni una formación"],
  ["Gestión mensual con capacidad de trabajo definida", "Campañas, cambios o solicitudes ilimitados"],
  ["Optimización semanal e informe mensual", "Una garantía de ventas"],
  ["Activación y configuración de tus cuentas", "Producción de video, fotografía o diseño (se cotiza aparte)"],
  [
    "Recomendaciones para conectar la publicidad con tu proceso comercial",
    "Control sobre tu precio, inventario, atención o cierre de ventas",
  ],
];

const FAQ = [
  {
    q: "¿Qué es exactamente BACK2GROW?",
    a: "Un equipo que administra tu publicidad digital: hace de estratega, administrador de campañas y analista. Tú nos cuentas qué vendes y a quién, apruebas, y nosotros lanzamos, medimos y optimizamos.",
  },
  {
    q: "¿La inversión en anuncios está incluida?",
    a: "No. La pauta va aparte, desde $1.000.000 al mes, y se paga directamente a la plataforma (Meta, Google, TikTok o Pinterest). Nuestra tarifa cubre el trabajo de administrarla.",
  },
  {
    q: "¿Cuántas campañas incluye Publicidad Digital Activa?",
    a: "Hasta 3 campañas activas a la vez, en 1 plataforma.",
  },
  {
    q: "¿Qué pasa si no tengo las cuentas configuradas?",
    a: "Con la oferta actual la activación va incluida: organizamos cuentas, vinculamos Facebook e Instagram, configuramos métodos de pago y accesos, y dejamos listo el píxel básico. Si ya tienes todo listo, hacemos una auditoría inicial y no pagas lo que no necesitas.",
  },
  {
    q: "¿Garantizan ventas?",
    a: "No. Nadie serio puede hacerlo. Lo que sí hacemos es poner tu negocio frente a las personas correctas, medir cada peso y mejorar cada semana. El cierre de la venta depende también de tu precio, tu oferta y tu atención.",
  },
  {
    q: "¿Puedo agregar otra plataforma después?",
    a: "Sí. Empiezas con una y, cuando tenga sentido, sumamos otra. Se cotiza aparte y te lo dejamos por escrito antes de empezar.",
  },
  {
    q: "¿Qué necesito para comenzar?",
    a: "Un producto o servicio con precio definido, contenido para promocionar, presupuesto para pauta y alguien que responda los mensajes. Con eso arrancamos.",
  },
  {
    q: "¿Hasta cuándo es la oferta?",
    a: "Hasta el lunes 30 de noviembre a las 11:59 p. m., hora Colombia.",
  },
  {
    q: "Tengo otras dudas.",
    a: (
      <>
        Escríbenos por{" "}
        <a href={WA.dudas} target="_blank" rel="noopener noreferrer" className="text-lime underline underline-offset-4">
          WhatsApp
        </a>{" "}
        y te respondemos nosotros, no un bot.
      </>
    ),
  },
];

/* ---------- small pieces ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-lime">
      <span className="size-1.5 rounded-full bg-lime" aria-hidden />
      {children}
    </p>
  );
}

function CtaPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`press group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-center font-medium text-[#141414] hover:bg-pale ${className}`}
    >
      {children}
      <ArrowUpRight
        className="size-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5"
        aria-hidden
      />
    </a>
  );
}

function CtaGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-lime/60 px-6 py-3 text-center font-medium text-lime hover:bg-lime/10"
    >
      {children}
    </a>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <>
      <Header logo={<Wordmark className="block w-[104px] sm:w-[120px] [&_svg]:h-auto [&_svg]:w-full" />} />

      <main id="inicio">
        {/* HERO */}
        <section className="p-2 sm:p-3">
          <div className="glow-hero grain relative flex min-h-[92svh] flex-col justify-end overflow-hidden rounded-[28px] px-6 pb-10 pt-32 sm:rounded-[36px] sm:px-10 sm:pb-14 lg:px-14">
            <Isotype className="pointer-events-none absolute -right-[18%] top-[8%] block w-[90%] text-lime/[0.07] sm:-right-[6%] sm:w-[58%] lg:w-[46%] [&_svg]:h-auto [&_svg]:w-full" />

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <Reveal>
                  <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1.5 text-xs font-medium text-pale">
                    <span className="size-1.5 rounded-full bg-lime" aria-hidden />
                    Activación de cuentas incluida hasta el 30 de noviembre
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.035em] text-foreground">
                    Publicidad que <span className="text-lime">mueve</span> negocios.
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={0.14} className="max-w-md lg:justify-self-end">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Un equipo que lanza, mide y optimiza tus campañas en Meta, Google, TikTok y Pinterest.
                  Tú no tienes que aprender las plataformas.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <CtaPrimary href={WA.general}>Quiero que BACK2GROW maneje mi publicidad</CtaPrimary>
                  <p className="text-sm text-muted-foreground">
                    Contrato claro, sin letra pequeña · Cupos limitados este mes
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FACTS STRIP */}
        <section aria-label="Lo que incluye el servicio" className="overflow-hidden border-b border-border py-6">
          <div className="marquee-track flex w-max gap-12 pr-12">
            {[0, 1].map((k) => (
              <ul key={k} className="flex shrink-0 items-center gap-12" aria-hidden={k === 1}>
                {[
                  ["4", "plataformas de publicidad"],
                  ["Semanal", "seguimiento y optimización"],
                  ["Mensual", "informe claro con recomendaciones"],
                  ["1 equipo", "estratega, administrador y analista"],
                ].map(([big, small]) => (
                  <li key={big} className="flex items-baseline gap-3 whitespace-nowrap">
                    <span className="font-display text-2xl font-bold text-lime">{big}</span>
                    <span className="text-muted-foreground">{small}</span>
                    <Isotype className="ml-9 block w-4 text-foreground/20 [&_svg]:h-auto [&_svg]:w-full" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Quiénes somos</Eyebrow>
              <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                Hacemos el trabajo de un equipo de publicidad completo, <span className="text-muted-foreground">sin que armes uno.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed text-foreground/80">
                Nos cuentas qué vendes y a quién. Te dejamos las campañas montadas, segmentadas y midiéndose.
                Tú apruebas y nosotros lanzamos.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                Después optimizamos cada semana y te explicamos los resultados en lenguaje claro.
              </p>
              <ul className="mt-10 border-t border-border">
                {["Estratega", "Administrador de campañas", "Analista"].map((r, i) => (
                  <li key={r} className="flex items-center justify-between border-b border-border py-4">
                    <span>{r}</span>
                    <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PLATFORMS */}
        <section id="plataformas" className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <div className="rounded-[28px] bg-card p-6 sm:rounded-[36px] sm:p-10 lg:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <Reveal className="max-w-2xl">
                <Eyebrow>Plataformas</Eyebrow>
                <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                  La plataforma no se elige por moda.
                </h2>
              </Reveal>
              <Reveal delay={0.06} className="max-w-sm">
                <p className="text-muted-foreground">
                  Se define según dónde busca tu cliente, qué vendes y qué acción queremos conseguir.
                </p>
              </Reveal>
            </div>

            <ul className="mt-12 border-t border-border">
              {PLATFORMS.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 0.05} className="group grid gap-2 border-b border-border py-7 sm:grid-cols-[3rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-lime">{p.where}</p>
                  </div>
                  <p className="text-foreground/80 sm:text-lg">{p.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* METHOD */}
        <section id="metodo" className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>Cómo trabajamos</Eyebrow>
              <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                Nuestro método, paso a paso
              </h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                Usamos inteligencia artificial para análisis, investigación y optimización, siempre con criterio
                humano. La IA apoya; no promete ventas.
              </p>
              <div className="mt-8">
                <CtaGhost href="#planes">Quiero ver los planes</CtaGhost>
              </div>
            </Reveal>

            <ol className="relative">
              <span className="absolute bottom-6 left-[23px] top-6 w-px bg-gradient-to-b from-lime via-mint/50 to-transparent" aria-hidden />
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.05} className="relative grid grid-cols-[48px_1fr] gap-6 pb-10 last:pb-0">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-lime/50 bg-background font-display font-bold text-lime">
                    0{i + 1}
                  </span>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PLANS */}
        <section id="planes" className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>Esto trae BACK2GROW</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              Elige cómo quieres que trabajemos
            </h2>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Activa */}
            <Reveal className="relative flex flex-col overflow-hidden rounded-[28px] bg-lime p-7 text-[#141414] sm:p-10">
              <Isotype className="pointer-events-none absolute -bottom-16 -right-16 block w-64 text-[#141414]/[0.07] [&_svg]:h-auto [&_svg]:w-full" />
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">Publicidad Digital Activa</h3>
              <p className="mt-3 max-w-md text-[#141414]/75">
                Para negocios que ya tienen contenido y necesitan que más personas los conozcan.
              </p>
              <ul className="mt-8 grid gap-3 border-t border-[#141414]/15 pt-8">
                {PLAN_ACTIVA.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA.activa}
                target="_blank"
                rel="noopener noreferrer"
                className="press mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#141414] px-6 py-3 font-medium text-lime hover:bg-[#262626]"
              >
                Quiero Publicidad Digital Activa
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Reveal>

            {/* Premium */}
            <Reveal delay={0.08} className="flex flex-col rounded-[28px] border border-border bg-card p-7 sm:p-10">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">Estrategia + Publicidad Digital</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                Para empresas que quieren construir una estrategia comercial alrededor de su publicidad.
              </p>
              <ul className="mt-8 grid gap-3 border-t border-border pt-8">
                {PLAN_PREMIUM.map((f) => (
                  <li key={f} className="flex gap-3 text-foreground/85">
                    <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <CtaGhost href={WA.premium}>Quiero el plan Premium</CtaGhost>
              </div>
            </Reveal>
          </div>

          {/* OFFER */}
          <Reveal className="mt-4">
            <div className="glow-cta grain overflow-hidden rounded-[28px] border border-lime/25 p-7 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                <div>
                  <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#141414]">
                    Oferta especial
                  </span>
                  <h3 className="mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.02em]">
                    Esto es lo que te llevas con BACK2GROW
                  </h3>
                  <ol className="mt-8 grid gap-6">
                    {BUNDLE.map((b) => (
                      <li key={b.n} className="grid grid-cols-1 gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
                        <span className="whitespace-nowrap font-display text-lg font-bold text-lime">Nº {b.n}</span>
                        <div>
                          <p className="font-medium">{b.title}</p>
                          <p className="mt-1 text-muted-foreground">{b.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex min-w-0 flex-col justify-between gap-10 rounded-2xl border border-border bg-[#141414]/60 p-5 sm:p-8">
                  <div>
                    <p className="text-sm text-muted-foreground">Plan incluido</p>
                    <p className="mt-1 text-2xl font-medium tracking-tight text-lime sm:text-3xl">Publicidad Digital Activa</p>
                    <ul className="mt-6 grid gap-3 text-sm text-foreground/85">
                      {[
                        "Atención por WhatsApp con nuestro equipo",
                        "Propuesta y alcance por escrito antes de empezar",
                        "La inversión publicitaria se paga directamente a la plataforma",
                      ].map((t) => (
                        <li key={t} className="flex gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">La oferta cierra en</p>
                    <Countdown />
                    <CtaPrimary href={WA.oferta} className="mt-6 w-full">
                      Quiero la oferta por WhatsApp
                    </CtaPrimary>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-sm text-muted-foreground">
                Pauta, producción audiovisual, diseño y herramientas externas se cotizan aparte. Usamos las piezas que tú
                suministras.
              </p>
            </div>
          </Reveal>
        </section>

        {/* FIT */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>Antes de escribirnos</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              ¿BACK2GROW es para ti?
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[28px] border border-lime/30 bg-card p-7 sm:p-10">
              <h3 className="text-xl font-medium text-lime">Es para ti si…</h3>
              <ul className="mt-6 grid gap-4">
                {FOR_YOU.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-lime text-[#141414]">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[28px] border border-border p-7 sm:p-10">
              <h3 className="text-xl font-medium text-muted-foreground">No es para ti si…</h3>
              <ul className="mt-6 grid gap-4">
                {NOT_FOR_YOU.map((t) => (
                  <li key={t} className="flex gap-3 text-muted-foreground">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border">
                      <X className="size-3.5" aria-hidden />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* IS / ISN'T */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Sin letra pequeña</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              Qué sí es y qué no es
            </h2>
          </Reveal>
          <Reveal>
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">Qué incluye y qué no incluye BACK2GROW</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="pb-4 pr-4 text-sm font-medium uppercase tracking-[0.15em] text-lime">Sí es</th>
                  <th scope="col" className="pb-4 pl-4 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">No es</th>
                </tr>
              </thead>
              <tbody>
                {IS_ISNT.map(([yes, no]) => (
                  <tr key={yes} className="border-b border-border align-top">
                    <td className="py-5 pr-4 text-foreground sm:text-lg">{yes}</td>
                    <td className="py-5 pl-4 text-muted-foreground sm:text-lg">{no}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="preguntas" className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                Lo que preguntan antes de contratar
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <Faq items={FAQ} />
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="p-2 sm:p-3">
          <div className="glow-cta grain relative overflow-hidden rounded-[28px] px-6 py-20 sm:rounded-[36px] sm:px-10 sm:py-28 lg:px-14">
            <Isotype className="pointer-events-none absolute -bottom-[20%] -right-[10%] block w-[70%] text-lime/[0.08] sm:w-[40%] [&_svg]:h-auto [&_svg]:w-full" />
            <Reveal className="relative max-w-3xl">
              <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1] tracking-[-0.035em]">
                Tu competencia ya está anunciándose.{" "}
                <span className="text-lime">Que tu publicidad trabaje contigo.</span>
              </h2>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <CtaPrimary href={WA.general}>Quiero empezar con BACK2GROW</CtaPrimary>
                <CtaGhost href={WA.dudas}>
                  <MessageCircle className="size-4" aria-hidden />
                  ¿Dudas? Escríbenos
                </CtaGhost>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                El cierre de la oferta es el lunes 30 de noviembre, 11:59 p. m. hora Colombia.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-[1400px] px-6 pb-8 pt-16 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark className="block w-40 text-foreground [&_svg]:h-auto [&_svg]:w-full" />
            <p className="mt-4 max-w-xs text-muted-foreground">Agencia de expansión digital empresarial.</p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Escríbenos</p>
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="press font-display text-2xl font-bold text-foreground hover:text-lime"
            >
              +57 323 374 1770
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 BACK2GROW. Los resultados de clientes no son una garantía para tu negocio.</p>
          <p>
            Hecho con Claude Web Builder de{" "}
            <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
              Tododeia
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
