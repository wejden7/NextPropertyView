"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Submit } from "@/components/Button";
import { InputPassword } from "@/components/Input";
import { resetPassword } from "@/service/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { shemaResettPassword } from "@/utils/yup";
const formOption = {
  resolver: yupResolver(shemaResettPassword),
  defaultValues: { password: "" },
};
const msg = "La connexion a échouée, merci de réessayer";

const ResetPassword = () => {
  const { register, handleSubmit, formState } = useForm(formOption);
  const { errors, isSubmitting } = formState;
  const [error, setError] = useState<String | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams?.get("token");

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    if (token) {
      const newData = { ...data, token };
      await resetPassword(newData)
        .then((result) => router.replace("/signin"))
        .catch((error) => {
          console.log(error);
          const { status, data } = error.response;
          setError(msg);
        });
    }
  });

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
      <h1 className="text-primary-500 text-xl font-semibold ">
        Reset Password
      </h1>
      {error ? (
        <p className="text-center w-1/2 text-sm text-red-500 pt-4">{error}</p>
      ) : (
        <p className="text-center text-sm text-gray-500 pt-4">
          Do not warry ! We will help you recover
          <br /> your password.
        </p>
      )}

      <label htmlFor="email" className="w-1/2 font-semibold py-4">
        New Password
      </label>
      <InputPassword
        register={register("password")}
        errors={errors.password}
        placeholder="Enter your password"
      />
      <Submit value="Send" isSubmitting={isSubmitting} />
    </form>
  );
};

export default ResetPassword;
