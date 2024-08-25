import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import ToastProvider from "@/components/toast-provider.component";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Short URL",
  description: "Generate short URLs",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {children}
    <ToastProvider/>
    </body>
    </html>
  );
}
