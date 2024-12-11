import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alessandro Barber",
  description: "Transforme seu visual com cortes exclusivos e personalizados. Especialistas em visagismo e realinhamento capilar para destacar seu estilo único!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
