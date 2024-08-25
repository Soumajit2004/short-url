"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import {createUrl} from "@/app/_actions/url-service";
import {useRef} from "react";

type UrlInputs = {
  originalUrl: string
}

export default function CreateUrlButton() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UrlInputs>()

  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSubmit: SubmitHandler<UrlInputs> = async ({originalUrl}) => {
    dialogRef.current?.close()
    await createUrl(originalUrl)
  }

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button className="btn btn-secondary" onClick={openDialog}>
        New URL
      </button>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create new URL</h3>
          <p className="py-4">paste the original url below and get a random Short URL</p>

          <form id={"linkForm"} onSubmit={handleSubmit(onSubmit)}>
            <textarea className="textarea textarea-bordered w-full"
                      placeholder="Original URL" {...register("originalUrl", {required: true})}></textarea>
            {errors.originalUrl && <span className="text-error">Original URL is required</span>}
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
              <button type={"submit"} form={"linkForm"} className={"btn btn-primary ml-2"}>Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}