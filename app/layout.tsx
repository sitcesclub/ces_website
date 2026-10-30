import type { Metadata } from "next";
import { Newsreader, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import "@/app/globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computer Engineers' Society",
  description:
    "Official Computer Science & Engineering Department Club of Siliguri Institute of Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${geistMono.variable} font-serif scroll-smooth`}
    >
      <body className="font-serif min-h-screen overflow-x-hidden bg-[#050408] text-[#f2f0fb] antialiased">
        <div className="relative min-h-screen overflow-hidden rounded-[16px] bg-[#050408]">
          <StarField />

          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(74, 127, 212, 0.12), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(122, 140, 255, 0.06), transparent 60%)",
            }}
          />

          <div className="relative z-10 flex min-h-screen w-full flex-col">
            <Navbar />

            <main className="w-full flex-grow">{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}