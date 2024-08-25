"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import {signIn} from "next-auth/react";

type SigninInputs = {
  username: string
  password: string
}

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninInputs>()

  const onSubmit: SubmitHandler<SigninInputs> = async ({username, password}) => {
    await signIn("Credentials", {username, password});
  }

  return (
    <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>

      <input type={"text"}
             placeholder={"Username"}
             className={"input input-bordered w-full "} {...register("username", {required: true})} />
      {errors.username && <span className={"text-error"}>Username is required</span>}


      <input type={"password"}
             placeholder={"Password"}
             className={"input input-bordered w-full "} {...register("password", {required: true})} />
      {errors.password && <span className={"text-error"}>Password is required</span>}

      <button type="submit" className={"btn btn-primary w-full"}>Register</button>
    </form>
  )
}