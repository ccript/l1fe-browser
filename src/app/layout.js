import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "l1fe - Browser",
  description: "An AI search tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-[100dvh] w-screen">
          <div className="h-full w-full text-center overflow-hidden">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
