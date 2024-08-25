import SignupForm from "@/app/auth/signup/signup-form.conponent";
import Link from "next/link";

export default function Signup() {
  return (
    <main className={"text-base-content p-5 flex flex-col justify-between h-full"}>
      <div>
        <h1 className={"text-3xl font-bold mb-6"}>Sign up</h1>
        <SignupForm/>
      </div>

      <span className={"mx-auto"}>already have an account? <Link href={"/auth/signin"}
                                           className={"link link-primary"}>login</Link></span>
    </main>
  );
}
