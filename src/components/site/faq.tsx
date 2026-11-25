"use client";

import { Accordion as A } from "radix-ui";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <A.Root type="single" collapsible className="border-t border-border">
      {items.map((item, i) => (
        <A.Item key={i} value={`q${i}`} className="border-b border-border">
          <A.Header>
            <A.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-xl">
              {item.q}
              <span className="press inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-lime group-data-[state=open]:bg-lime group-data-[state=open]:text-[#141414]">
                <Plus
                  className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-[state=open]:rotate-45"
                  aria-hidden
                />
              </span>
            </A.Trigger>
          </A.Header>
          <A.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
              {item.a}
            </div>
          </A.Content>
        </A.Item>
      ))}
    </A.Root>
  );
}
