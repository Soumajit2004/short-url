import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import SessionWrapper from "@/app/providers";
import ToastProvider from "@/app/_components/toast-provider.component";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Short URL",
  description: "Generate short URLs",
};

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body className={inter.className}>
    <SessionWrapper>
      {children}
    </SessionWrapper>
    <ToastProvider/>
    </body>
    </html>
  );
}
