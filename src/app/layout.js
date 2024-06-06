import { Inter } from "next/font/google";
import PariclessBG from "./part/ParticlesBG";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Denny Hsu",
  description: "Tang-Ming Hsu personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PariclessBG />
        {children}
      </body>
    </html>
  );
}
