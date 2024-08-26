"use client"

import {deleteUrl} from "@/app/_actions/url-service";
import {useRouter} from "next/navigation";
import EditUrlButton from "@/app/_components/url/edit-url-button";
import Link from "next/link";

export default function UrlCard({id, originalUrl}: { id: string; originalUrl: string }) {

  const router = useRouter();

  const handelUrlDelete = async () => {
    await deleteUrl(id)
    router.refresh()
  }

  return (
    <div
      className={"flex flex-col justify-between w-full h-full bg-accent p-5 rounded-lg text-accent-content hover:shadow-xl overflow-x-hidden"}>
      <div>
        <p className={"text-sm"}>
          Original URL
        </p>
        <h4 className={"font-bold text-lg"}>
          {originalUrl}
        </h4>
      </div>

      <div className="flex gap-2 mt-10 w-full justify-end">
        <button className="btn btn-square btn-error " onClick={handelUrlDelete}>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <EditUrlButton id={id} originalUrl={originalUrl}/>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Link className="btn btn-primary" href={`/redirect/${id}`} target={"_blank"}>
          Visit <span className="material-symbols-outlined">open_in_new</span>
        </Link>
      </div>
    </div>
  )
}