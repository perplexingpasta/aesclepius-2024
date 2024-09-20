import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asclepius 2024 | 7th International UG Medical Conference",
  description:
    "Ascelpius is the 7th International UG Medical Conference taking place in JSS Medical College, Mysuru, India from 22nd to 26th October 2024. All delegates are welcome.",
  other: {
    // "twitter:image": "/images/ogmeta.png",
    "twitter:card": "Asclepius 2024",
    "og:url": "https://asclepius2024.in",
    // "og:image": "/images/ogmeta.png",
    "og:type": "website",
  },
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/apple-touch-icon.png"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
