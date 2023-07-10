import "./globals.css";
import { Inter } from "next/font/google";

import { Navbar, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub Web — by @ladunjexa",
  description:
    "A Next.js GitHub homepage template with Tailwind CSS by @ladunjexa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="relative z-50">
            <div className="absolute">
              <Navbar />
            </div>
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
