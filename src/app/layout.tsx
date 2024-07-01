import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Expense application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={roboto.className} >
          <div className=" bg-yellow-400 rounded-md">
          <Header />

          <main >
            {children}
          </main>
          </div>
        </body>
      </html>
    </ClerkProvider>

  );
}
