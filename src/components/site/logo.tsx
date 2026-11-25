/* Paths extracted from the Back2grow brand manual (2024). Fill follows currentColor. */
import { readFileSync } from "node:fs";
import path from "node:path";

function inline(file: string) {
  const svg = readFileSync(path.join(process.cwd(), "public/brand", file), "utf8");
  return svg.replace("<svg ", '<svg aria-hidden="true" focusable="false" ');
}

const WORDMARK = inline("logo-wordmark.svg");
const ISOTYPE = inline("logo-isotype.svg");

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      role="img"
      aria-label="Back2grow"
      dangerouslySetInnerHTML={{ __html: WORDMARK }}
    />
  );
}

export function Isotype({ className }: { className?: string }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ISOTYPE }}
    />
  );
}
