# BACK2GROW · Sitio web

Página de BACK2GROW: publicidad que mueve negocios.

Hecha con Next.js 16, Tailwind CSS 4 y TypeScript. Usa los colores, las tipografías (DM Sans y Red Hat Display) y el logo del manual de marca.

## Publicar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) con tu cuenta.
2. Importa este repositorio (`back2grow/backtwogrow`).
3. Deja todo como viene y pulsa **Deploy**.

Cada cambio que se suba a la rama `main` se publica solo.

## Cambios frecuentes

| Qué cambiar | Dónde |
|---|---|
| Número de WhatsApp y mensajes de los botones | `src/lib/site.ts` |
| Fecha de cierre de la oferta | `OFFER_DEADLINE` en `src/lib/site.ts` |
| Textos, planes, preguntas frecuentes | `src/app/page.tsx` |
| Colores | `:root` en `src/app/globals.css` |
| Título y descripción para Google | `src/app/layout.tsx` |

## Probar en tu computador

```bash
npm install
```

```bash
npm run dev
```

Luego abre http://localhost:3000.
