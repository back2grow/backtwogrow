"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { WA } from "@/lib/site";
import type { ReactNode } from "react";

const LINKS = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#metodo", label: "Método" },
  { href: "#planes", label: "Planes" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header({ logo }: { logo: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#inicio"
          className="press -m-2 rounded-lg p-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          aria-label="BACK2GROW, ir al inicio"
        >
          {logo}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-[#141414]/70 p-1 backdrop-blur-md">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="press block rounded-full px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden h-11 items-center rounded-full border border-lime/60 px-5 text-sm font-medium text-lime hover:bg-lime hover:text-[#141414] sm:inline-flex"
          >
            Hablemos por WhatsApp
          </a>

          <SheetPrimitive.Root open={open} onOpenChange={setOpen}>
            <SheetPrimitive.Trigger
              className="press inline-flex size-11 items-center justify-center rounded-full border border-border bg-[#141414]/70 text-foreground backdrop-blur-md md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" aria-hidden />
            </SheetPrimitive.Trigger>
            <SheetPrimitive.Portal>
              <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
              <SheetPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col gap-8 border-l border-border bg-[#191919] p-6 duration-300 data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=closed]:duration-200">
                <div className="flex items-center justify-between">
                  <SheetPrimitive.Title className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Menú
                  </SheetPrimitive.Title>
                  <SheetPrimitive.Close
                    className="press inline-flex size-11 items-center justify-center rounded-full border border-border"
                    aria-label="Cerrar menú"
                  >
                    <X className="size-5" aria-hidden />
                  </SheetPrimitive.Close>
                </div>
                <SheetPrimitive.Description className="sr-only">
                  Enlaces a las secciones de la página
                </SheetPrimitive.Description>
                <nav aria-label="Móvil">
                  <ul className="flex flex-col">
                    {LINKS.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="block border-b border-border py-4 text-2xl text-foreground"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <a
                  href={WA.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press mt-auto inline-flex h-12 items-center justify-center rounded-full bg-lime px-6 font-medium text-[#141414]"
                >
                  Hablemos por WhatsApp
                </a>
              </SheetPrimitive.Content>
            </SheetPrimitive.Portal>
          </SheetPrimitive.Root>
        </div>
      </div>
    </header>
  );
}
