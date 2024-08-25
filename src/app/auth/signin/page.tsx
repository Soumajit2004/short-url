import SigninButton from "@/app/_components/auth/login-button.component";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Signin() {
  const session = await getServerSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className={"text-base-content p-5 flex flex-col h-full justify-between"}>
      <div>
        <h1 className={"text-3xl font-bold mb-10"}>Sign in</h1>

        <h3 className={"text-xl mb-2 font-bold"}>
          Note to Users:
        </h3>
        <p>
          This Short URL service is a demo project. Please use it responsibly and refrain from abusing the site. We
          appreciate your cooperation in maintaining a safe and functional environment for all users.
          <br/>
          <br/>
          Thank you for your understanding.
        </p>
      </div>

      <SigninButton/>
    </main>
  );
}
