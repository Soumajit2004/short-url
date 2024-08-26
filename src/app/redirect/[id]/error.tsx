"use client"

export default function RedirectPageError() {

  return (
    <div className={"w-screen h-screen flex flex-col items-center justify-center"}>
      <div className={"bg-red-100 p-10 border-4 border-error border-dashed rounded-xl"}>
        <h1 className={"font-bold text-3xl text-error"}>Invalid Link. Make sure its correct !</h1>
        <p></p>
      </div>
    </div>

  )
}