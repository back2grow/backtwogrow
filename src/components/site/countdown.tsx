"use client";

import { useEffect, useState } from "react";
import { OFFER_DEADLINE } from "@/lib/site";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    días: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

export function Countdown() {
  const end = new Date(OFFER_DEADLINE).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now !== null && now >= end) {
    return (
      <p className="text-sm text-muted-foreground">
        Esta oferta ya cerró. Escríbenos y te contamos qué hay disponible.
      </p>
    );
  }

  const p = parts(now === null ? 0 : end - now);

  return (
    <div>
      <p className="sr-only">
        La oferta cierra el lunes 30 de noviembre a las 11:59 p. m., hora Colombia.
      </p>
      <dl className="grid grid-cols-4 gap-2" aria-hidden="true">
        {Object.entries(p).map(([label, value]) => (
          <div
            key={label}
            className="flex min-w-0 flex-col-reverse items-center rounded-xl border border-border bg-[#141414] px-1 py-2"
          >
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="font-display text-2xl font-bold tabular-nums text-foreground">
              {now === null ? "--" : String(value).padStart(2, "0")}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
