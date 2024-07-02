import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter =Inter ({ subsets: ['latin'] });

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
        <body className={inter.className} >
          <div className="  rounded-md">
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
