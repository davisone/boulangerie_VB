import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boulangerie Vanessa et Baptiste - Artisan Boulanger à Chavagne",
  description: "Boulangerie artisanale à Chavagne. Découvrez nos pains, pâtisseries et chocolats faits maison par Vanessa et Baptiste, artisans boulangers passionnés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Facebook SDK */}
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Div nécessaire pour le SDK Facebook */}
        <div id="fb-root"></div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
