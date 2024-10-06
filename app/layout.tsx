import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asclepius 2024 | 7th International UG Medical Conference",
  description:
    "Ascelpius is the 7th International UG Medical Conference taking place in JSS Medical College, Mysuru, India from 22nd to 26th October 2024. All delegates are welcome.",
  other: {
    "twitter:card": "Asclepius 2024",
    "og:url": "https://asclepius2024.in",
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
    <>
      <Script
        defer
        type="text/partytown"
        src="https://cloud.umami.is/script.js"
        data-website-id="c02acaae-a32d-4fd0-b4f0-24962e3b8cc6"
      />
      <html lang="en">
        <body className={montserrat.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
