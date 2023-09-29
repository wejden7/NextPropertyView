"use client";
import { InputBas, InputPassword } from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/slice/authenticationSlice";
import { Submit } from "@/components/Button";
import { useRouter } from "next/navigation";
import { schemaSignin } from "@/utils/yup";
import { useForm } from "react-hook-form";
import { loginApi } from "@/service/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";

const formOption = {
  resolver: yupResolver(schemaSignin),
  defaultValues: { email: "", password: "" },
};

export default function Page() {
  const msg = "The email address or password is incorrect. Please retry...";
  const { register, handleSubmit, formState } = useForm(formOption);
  const [error, setError] = useState<String | null>(null);
  const { errors, isSubmitting } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    await loginApi(data)
      .then((result) => {
        dispatch(login(result));
        router.replace("/accueil");
      })
      .catch((error) => setError(msg));
  });

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
      <h1 className="text-primary-500 text-xl font-semibold ">
        Log in To Your Account
      </h1>

      {error ? (
        <p className="text-center w-1/2 text-sm text-red-500 pt-4">{error}</p>
      ) : (
        <p className="text-center text-sm text-gray-500 pt-4">
          Log in your account so you can find new <br />
          property and set your property{" "}
        </p>
      )}

      <label htmlFor="email" className="w-1/2 font-semibold py-4">
        Email
      </label>
      <InputBas
        register={register("email")}
        errors={errors.email}
        placeholder="Enter your email address"
      />

      <label htmlFor="password" className="w-1/2 font-semibold pb-4">
        Password
      </label>
      <InputPassword
        register={register("password")}
        errors={errors.password}
        placeholder="Entre your password"
      />

      <Submit value="LOG IN" isSubmitting={isSubmitting} />

      <p className="text-sm text-gray-500">
        Don't Have an Account Yet?
        <Link href="/signup" className="text-sm ml-1  text-primary-100">
          Create
        </Link>
      </p>

      <Link href="/forget-password" className="text-xs text-primary-100 pt-1">
        Forget your password ?
      </Link>
    </form>
  );
}
