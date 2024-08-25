"use client"

import {signOut} from "next-auth/react";

export default function LogoutButton() {
  const handelClick = async () => {
    await signOut({redirect: true, callbackUrl: "/auth/signin"})
  }

  return (
    <button className={"btn btn-error"} onClick={handelClick}>
      Logout
    </button>
  )
}