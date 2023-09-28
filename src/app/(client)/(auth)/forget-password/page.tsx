"use client";
import { yupResolver } from "@hookform/resolvers/yup";

import { Submit } from "@/components/Button";
import { InputBas } from "@/components/Input";
import { forgetPassword } from "@/service/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCaretLeft } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { shemaForgetPassword } from "@/utils/yup";

const formOption = {
  resolver: yupResolver(shemaForgetPassword),
  defaultValues: { email: "" },
};

const ForgetPassword = () => {
  const { register, handleSubmit, formState, reset, setError, getValues } =
    useForm(formOption);
  const [nextpage, setNextpage] = useState(false);
  const { errors, isSubmitting } = formState;

  const handleError400 = (err: any) => {
    err.forEach(({ path, msg }: { path: any; msg: string }) => {
      setError(path, { type: "manual", message: msg });
    });
  };
  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    await forgetPassword(data)
      .then((result) => setNextpage(true))
      .catch((error) => {
        console.log(error);
        const { status, data } = error.response;
        if (status === 400) handleError400(data.errors);
      });
  });
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
      {!nextpage ? (
        <>
          <h1 className="text-primary-500 text-xl font-semibold ">
            Forget Password
          </h1>
          <p className="text-center text-sm text-gray-500 pt-4">
            Do not warry ! We will help you recover
            <br /> your password.
          </p>
          <label htmlFor="email" className="w-1/2 font-semibold py-4">
            Email
          </label>
          <InputBas
            register={register("email")}
            errors={errors.email}
            placeholder="Enter your email address"
          />
          <Submit value="Send" isSubmitting={isSubmitting} />
        </>
      ) : (
        <>
          <MdOutlineMarkEmailRead className="text-5xl  text-primary-100 " />
          <h1 className="text-primary-500 text-xl font-semibold pt-4">
            Verification email
          </h1>
          <p className="text-center text-sm text-gray-500 py-4">
            We have send the Password reset link to <br />
            Your Email Address
          </p>
          <p className="font-bold text-xl">{getValues("email")}</p>

          <div className=" flex gap-1 items-center">
            <p className="text-sm">Don't receive an email?</p>
            <Submit link={true} value="Resend" isSubmitting={isSubmitting} />
          </div>
          <button
            onClick={() => setNextpage(false)}
            type="button"
            className="  flex items-center gap-1 text-primary-100 "
          >
            <AiFillCaretLeft /> Back
          </button>
        </>
      )}
    </form>
  );
};

export default ForgetPassword;
