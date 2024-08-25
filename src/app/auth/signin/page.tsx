import Link from "next/link";
import SigninForm from "@/app/auth/signin/signin-form.conponent";

export default function Signin() {
  return (
    <main className={"text-base-content p-5 flex flex-col justify-between h-full"}>
      <div>
        <h1 className={"text-3xl font-bold mb-6"}>Sign in</h1>
        <SigninForm/>
      </div>

      <span className={"mx-auto"}>don't have an account? <Link href={"/auth/signup"}
                                                              className={"link link-primary"}>register</Link></span>
    </main>
  );
}
