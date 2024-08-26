"use client"

import {deleteUrl} from "@/app/_actions/url-service";
import {useRouter} from "next/navigation";

export default function UrlCard({id, originalUrl}: { id: string; originalUrl: string }) {

  const router = useRouter();

  const handelUrlDelete = async () => {
    await deleteUrl(id)
    router.refresh()
  }

  return (
    <div
      className={"w-full h-full bg-accent p-5 rounded-lg text-accent-content"}>
      <p className={"text-sm"}>
        Original URL
      </p>
      <h4 className={"font-bold text-lg"}>
        {originalUrl}
      </h4>

      <div className="flex gap-2 mt-10 w-full justify-end">
        <button className="btn btn-square btn-error " onClick={handelUrlDelete}>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <button className="btn btn-square btn-primary ">
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button className="btn btn-primary">
          Visit <span className="material-symbols-outlined">open_in_new</span>
        </button>
      </div>
    </div>
  )
}