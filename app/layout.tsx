import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/ui/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: {
    default: "NORO.WORK | Modern Web Development Studio",
    template: "%s | NORO.WORK",
  },
  description:
    "Small team of three senior developers building high-performance websites and web applications. Next.js, React, GSAP animations. Starting at $1,000. Fast turnaround, no corporate overhead.",
  keywords: [
    // Primary Keywords (High Intent)
    "web development agency",
    "custom website development",
    "next.js development services",
    "react development agency",
    "small web design studio",

    // Secondary Keywords (Service-Based)
    "website performance optimization",
    "GSAP animation development",
    "headless CMS integration",
    "e-commerce website development",
    "landing page design",

    // Long-Tail Keywords (Conversion-Focused)
    "affordable web development services",
    "small business website design",
    "startup web development",
    "fast website development",
    "modern web applications",

    // Technical Keywords (SEO Value)
    "Next.js 14",
    "React 18",
    "TypeScript development",
    "Tailwind CSS",
    "serverless architecture",

    // Location-Based (if applicable)
    "web development India",
    "Haryana web developers",
  ],
  authors: [
    { name: "NORO.WORK Team" },
    { name: "Ankit Mishra", url: "https://twitter.com/AnkitMishraexe" },
  ],
  creator: "NORO.WORK",
  publisher: "NORO.WORK Digital Studio",

  // ✅ CRITICAL: Set your actual production URL
  metadataBase: new URL("https://noro.work"), // Change this to your actual domain

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/", // If targeting Indian market
    },
  },

  openGraph: {
    title: "NORO.WORK | High-Performance Web Development Studio",
    description:
      "Small team of senior developers building fast, modern websites. Next.js + React + GSAP. $1,000+ projects. 2-4 week turnaround.",
    url: "https://noro.work",
    siteName: "NORO.WORK",
    images: [
      {
        url: "/og-image.jpg", // ✅ Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "NORO.WORK - Modern Web Development Studio",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg", // ✅ Optional: Square for some platforms
        width: 1200,
        height: 1200,
        alt: "NORO.WORK Logo",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN", // Change to en_US if targeting US market
    type: "website",
    // ✅ Add article type for blog posts
    // type: "article", // Use on blog post pages
  },

  // ✅ IMPROVED: Better Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "NORO.WORK | High-Performance Web Development",
    description:
      "Small team of senior devs. Next.js + React + GSAP. Fast, modern websites starting at $1,000.",
    images: ["/twitter-image.jpg"], // ✅ Create this (1200x675px for large card)
    creator: "@AnkitMishraexe",
    site: "@AnkitMishraexe", // Change to @norowork if you create company account
  },

  // ✅ IMPROVED: More specific robot instructions
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#F5F5F5]`}>
        <SmoothScroll>
          {" "}
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
