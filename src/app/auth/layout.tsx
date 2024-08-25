import React from "react";

export default function AuthLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"h-screen bg-base-300 flex flex-col items-center justify-center "}>
      <div className={"bg-base-100 container h-4/5 w-96 rounded-xl"}>
        {children}
      </div>
    </div>
  );
}