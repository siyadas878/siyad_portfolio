import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Mohammed Siyadh A S | Mobile Application Developer & Solution Consultant",
  description: "Portfolio of Mohammed Siyadh A S. Results-oriented Full Stack Mobile Application Developer with 4+ years of experience building high-performance applications across Flutter, Android, iOS, and React Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
