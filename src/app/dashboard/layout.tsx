import {PropsWithChildren} from "react";
import DashboardNavbar from "@/app/dashboard/navbar/dashboard-navbar";

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
