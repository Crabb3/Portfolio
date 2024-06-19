import { Inter } from "next/font/google";
import PariclessBG from "./part/ParticlesBG";
import "./globals.css";
import Header from "./components/Header";

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

        <div className="w-2/3 text-white relative m-auto p-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
