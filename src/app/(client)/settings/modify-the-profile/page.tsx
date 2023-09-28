"use client";
import { InputBas } from "@/components/Input";
import { useForm, ValidationMode } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaUpdateProfile } from "@/utils/yup";
import { Submit } from "@/components/Button";
import UserAvatar from "@/components/Avatar";

const user = {
  name: "wejden",
  telephone_number: "555137865",
  id_number: "scsdfdfds",
};
const formOption = {
  resolver: yupResolver(schemaUpdateProfile),
  defaultValues: user,
  mode: "onChange" as keyof ValidationMode,
};
const ModifyTheProfile = () => {
  const { register, handleSubmit, control, trigger, formState, setError } =
    useForm(formOption);
  const { errors, isSubmitting } = formState;
  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
  });
  return (
    <div onSubmit={onSubmit} className="py-4  ">
      <h1 className="text-2xl font-semibold">Modify The Profile</h1>
      <p className=" text-slate-500 pt-4">
        Maintain the confidentiality of your personal data.
        <br /> The information you add here is visible to anyone <br /> who
        views your profile.
      </p>
      <div className=" flex flex-col">
        <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
          Image
        </label>
        <div className="flex items-center gap-4">
          <UserAvatar color="green" label="W" size="lg" />

          <button className="btn">Modify</button>
        </div>
      </div>
      <form className=" flex flex-col">
        <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
          Name
        </label>
        <InputBas
          register={register("name")}
          errors={errors.name}
          placeholder="Enter your name"
        />

        <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
          Telephone number
        </label>
        <InputBas
          register={register("telephone_number")}
          errors={errors.telephone_number}
          placeholder="Entre your telephone numbe"
        />
        <label htmlFor="email" className="w-1/2 font-semibold pb-4 ">
          Cin
        </label>
        <InputBas
          register={register("id_number")}
          errors={errors.id_number}
          placeholder="Entre your cin"
        />
        <div className="w-1/2 flex justify-end">
          <Submit value="Save" isSubmitting={isSubmitting} link={false} />
        </div>
      </form>
    </div>
  );
};

export default ModifyTheProfile;
