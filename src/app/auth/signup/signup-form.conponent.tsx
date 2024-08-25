"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {signupUser} from "@/app/auth/auth.actions";

type SignupInputs = {
  username: string
  password: string
  confirmPassword: string
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupInputs>()

  const onSubmit: SubmitHandler<SignupInputs> = async ({username, password, confirmPassword}) => {
    if (password != confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const user = await signupUser(username, password);
    }
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


      <input type={"text"}
             placeholder={"Confirm Password"}
             className={"input input-bordered w-full "} {...register("confirmPassword")} />

      <button type="submit" className={"btn btn-primary w-full"}>Register</button>
    </form>
  )
}