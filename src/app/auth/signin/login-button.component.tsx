"use client"

import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function SigninButton() {
  const router = useRouter()

  const onClick = async () => {
    await signIn("github")
    router.push("/dashboard")
  }

  return (
    <button className={"btn btn-primary w-full"} onClick={onClick}>
      Sign in with GitHub
    </button>
  )
}