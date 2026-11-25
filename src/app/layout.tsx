import type { Metadata, Viewport } from "next";
import { DM_Sans, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "900"],
});

const title = "BACK2GROW · Publicidad que mueve negocios";
const description =
  "Lanzamos, medimos y optimizamos tus campañas en Meta, Google, TikTok y Pinterest. Tú no tienes que aprender las plataformas. Agencia de publicidad digital en Colombia.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "es_CO",
    type: "website",
    siteName: "BACK2GROW",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${redHat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
