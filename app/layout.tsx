import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Ankit Mishra | Full Stack Developer",
    template: "%s | Ankit Mishra",
  },
  description:
    "Full Stack Developer based in India, specializing in building modern web applications with React, Next.js, and Node.js",
  keywords: [
    "Ankit Mishra",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Ankit Mishra" }],
  creator: "Ankit Mishra",
  publisher: "Ankit Mishra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ankitmishra.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ankit Mishra | Full Stack Developer",
    description:
      "Full Stack Developer based in India, specializing in building modern web applications with React, Next.js, and Node.js",
    url: "https://ankitmishra.xyz",
    siteName: "Ankit Mishra",
    images: [
      {
        url: "https://ankitmishra.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ankit Mishra - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Mishra | Full Stack Developer",
    description:
      "Full Stack Developer based in India, specializing in building modern web applications with React, Next.js, and Node.js",
    images: ["https://winniesresort.vercel.app/og-image.jpg"],
    creator: "@AnkitMishraexe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        <main>{children}</main>
      </body>
    </html>
  );
}
