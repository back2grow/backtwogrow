export const WHATSAPP_NUMBER = "573233741770";

export function whatsapp(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: whatsapp("Hola BACK2GROW, quiero que manejen mi publicidad."),
  activa: whatsapp("Hola BACK2GROW, quiero el plan Publicidad Activa ($690.000/mes)."),
  premium: whatsapp("Hola BACK2GROW, quiero el plan Estrategia + Publicidad Digital."),
  oferta: whatsapp("Hola BACK2GROW, quiero la oferta con la activación incluida."),
  dudas: whatsapp("Hola BACK2GROW, tengo unas dudas antes de contratar."),
};

/** Lunes 30 de noviembre de 2026, 11:59 p. m. hora Colombia (UTC-5) */
export const OFFER_DEADLINE = "2026-11-30T23:59:00-05:00";
