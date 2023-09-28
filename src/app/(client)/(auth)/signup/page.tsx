"use client";
import { InputBas, InputPassword, SelectBase } from "@/components/Input";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useForm, ValidationMode } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Submit } from "@/components/Button";
import { useRouter } from "next/navigation";
import { schemaSignup } from "@/utils/yup";
import { signUp } from "@/service/auth";
import { useState } from "react";
import Link from "next/link";

const user = {
  name: "",
  email: "",
  password: "",
  telephone_number: "",
  id_number: "",
  role: 0,
};
const formOption = {
  resolver: yupResolver(schemaSignup),
  defaultValues: user,
  mode: "onChange" as keyof ValidationMode,
};

const options = [
  { value: 2, label: "Agent" },
  { value: 3, label: "Client" },
  { value: 4, label: "Property owner" },
];

export default function Page() {
  const router = useRouter();
  const [nextpage, setNextpage] = useState(false);
  const { register, handleSubmit, control, trigger, formState, setError } =
    useForm(formOption);
  const { errors, isSubmitting } = formState;

  const checkFirstInput = async () => {
    const result = await trigger(["name", "email", "password"]);
    if (result) setNextpage(true);
  };

  const handleError400 = (err: any) => {
    err.forEach(({ path, msg }: { path: any; msg: string }) => {
      setError(path, { type: "manual", message: msg });
      if (path === "email") setNextpage(false);
    });
  };

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    await signUp(data)
      .then((result) => router.replace("/signin"))
      .catch((e) => {
        console.log(e);
        const { status, data } = e.response;
        if (status === 400) handleError400(data.errors);
      });
  });

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
      <h1 className="text-primary-500 text-xl font-semibold  ">
        Sign Up for an Account
      </h1>

      <p className="text-center text-sm text-gray-500 pt-4">
        Let's get your all set up so you can start creating your
        <br /> first experience with next Property
      </p>

      {!nextpage && (
        <>
          <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
            Name
          </label>
          <InputBas
            register={register("name")}
            errors={errors.name}
            placeholder="Enter your name"
          />

          <label htmlFor="email" className="w-1/2 font-semibold pb-4 ">
            Email
          </label>
          <InputBas
            register={register("email")}
            errors={errors.email}
            placeholder="Enter your email address"
          />

          <label htmlFor="password" className="w-1/2 font-semibold pb-4 ">
            PassWord
          </label>
          <InputPassword
            register={register("password")}
            errors={errors.password}
            placeholder="Entre your password"
          />
        </>
      )}

      {nextpage && (
        <>
          <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
            Telephone number
          </label>
          <InputBas
            register={register("telephone_number")}
            errors={errors.telephone_number}
            placeholder="Entre your telephone number"
          />

          <label htmlFor="email" className="w-1/2 font-semibold pb-4 ">
            Cin Number
          </label>
          <InputBas
            register={register("id_number")}
            errors={errors.id_number}
            placeholder="Entre your cin"
          />

          <label htmlFor="email" className="w-1/2 font-semibold pb-4">
            Role
          </label>
          <SelectBase
            name="role"
            control={control}
            placeholder="Select an type"
            options={options}
            errors={errors.role}
          />
        </>
      )}

      {!nextpage ? (
        <button
          onClick={checkFirstInput}
          type="button"
          className="h-12 flex items-center gap-1 text-primary-100"
        >
          Continue <AiFillCaretRight />
        </button>
      ) : (
        <div className="flex my-4 items-center gap-4">
          <button
            onClick={() => setNextpage(false)}
            type="button"
            className=" h-12 flex items-center gap-1 text-primary-100 "
          >
            <AiFillCaretLeft /> Back
          </button>
          <Submit value="SIGN UP" isSubmitting={isSubmitting} />
        </div>
      )}

      <p className="text-sm text-gray-500">
        Alredy Signed up?
        <Link href="/signin" className="  text-primary-100 ml-1">
          Log In
        </Link>{" "}
      </p>
    </form>
  );
}
