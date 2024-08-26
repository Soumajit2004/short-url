"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import {updateUrl} from "@/app/_actions/url-service";
import {useRef} from "react";
import {useRouter} from "next/navigation";

type UrlInputs = {
  originalUrl: string
}

export default function EditUrlButton({id, originalUrl}: { id: string, originalUrl: string }) {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UrlInputs>()

  const router = useRouter()

  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSubmit: SubmitHandler<UrlInputs> = async (data) => {
    dialogRef.current?.close()
    await updateUrl(id, data.originalUrl)
    router.refresh()
  }

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button className="btn btn-square btn-primary " onClick={openDialog}>
        <span className="material-symbols-outlined">edit</span>
      </button>

      <dialog ref={dialogRef} className="modal text-base-content">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update URL</h3>
          <p>{`paste the new URL below to update URL: `}</p>
          <p className={"text-sm mb-4"}>{`[DOMAIN]/redirect/${id}`}</p>


          <form id={"editLinkForm"} onSubmit={handleSubmit(onSubmit)}>
            <input className="textarea textarea-bordered w-full"
                   placeholder="New Original URL" {...register("originalUrl", {required: true})}></input>
            {errors.originalUrl && <span className="text-error">Original URL is required</span>}
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
              <button type={"submit"} form={"editLinkForm"} className={"btn btn-primary ml-2"}>Update</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}