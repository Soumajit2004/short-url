import {PropsWithChildren} from "react";
import DashboardNavbar from "@/app/_components/navbar/dashboard-navbar";

export default async function DashboardLayout({
                                                children,
                                              }: PropsWithChildren) {

  return (
    <>
      <DashboardNavbar/>
      <main>
        {children}
      </main>
    </>
  );
}
