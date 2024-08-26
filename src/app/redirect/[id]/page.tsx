import {fetchUrlById} from "@/app/_actions/url-service";
import Link from "next/link";

export default async function RedirectPage({params}: { params: { id: string } }) {

  const urlData = await fetchUrlById(params.id)

  let redirectUrl = urlData.originalLink

  if (!urlData.originalLink.toString().match("^(http|https)://")) {
    redirectUrl = `https://${redirectUrl}`
  }

  return (
    <div className={"flex justify-center items-center h-screen w-screen"}>

      <div className={"flex flex-col gap-10 p-10 bg-green-100 border-dashed border-4 border-primary rounded-xl"}>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <p>You are being redirected to</p>
          <h1 className={"text-2xl font-bold "}>{urlData.originalLink}</h1>
        </div>

        <div className="flex fex-col gap-2 w-full justify-center items-center">
          <Link href={"/dashboard"} className={"btn btn-error"}>Cancel</Link>
          <Link href={redirectUrl} passHref
                className={"btn btn-primary"}>Visit</Link>
        </div>
      </div>
    </div>

  )
}