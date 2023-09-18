import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const magilio = localFont({
  src: "../../public/fonts/magilio.ttf",
  variable: "--font-magilio",
});

const nevis = localFont({
  src: "../../public/fonts/nevis.ttf",
  variable: "--font-nevis",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${magilio.variable} ${nevis.variable} ${outfit.variable}`}
      >
        <main className="bg-kabo-gray">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
