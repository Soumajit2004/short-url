import Link from "next/link";
import LogoutButton from "@/app/_components/auth/logout-button.component";
import CreateUrlButton from "@/app/dashboard/navbar/create-url-button";

export default function DashboardNavbar() {
  return (
    <div className={"bg-base-100 text-base-content top-0 sticky"}>
      <nav className={"navbar container mx-auto mt-2"}>
        <div className="navbar-start">
          <Link href={"/"} className={"font-bold text-xl"}>
            Short URL
          </Link>
        </div>
        <div className="navbar-end flex gap-2">
          <CreateUrlButton/>
          <LogoutButton/>
        </div>
      </nav>
      <div className="divider my-0"/>
    </div>
  )
}