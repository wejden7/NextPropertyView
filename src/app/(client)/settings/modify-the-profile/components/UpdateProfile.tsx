"use client";
import { user, updateUser } from "@/slice/authenticationSlice";
import { useForm, ValidationMode } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateProfile } from "@/utils/yup";
import { getClientToken } from "@/service/token";
import { InputBas } from "@/components/Input";
import { Submit } from "@/components/Button";
import { useEffect } from "react";

const formOption = {
  resolver: yupResolver(schemaUpdateProfile),
  mode: "onChange" as keyof ValidationMode,
};

const UpdateProfile = () => {
  const { register, handleSubmit, formState, setValue } = useForm(formOption);
  const { errors, isSubmitting } = formState;
  const userData = useSelector(user);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (userData) {
      setValue("name", userData?.name);
      setValue("id_number", userData?.id_number);
      setValue("telephone_number", userData?.telephone_number);
    }
  }, [userData]);

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    return getClientToken()
      .then((token) => dispatch(updateUser({ data, token })))
      .then(() => console.log("update in page"))
      .catch(() => console.log("error in paget of update"));
  });
  return (
    <form onSubmit={onSubmit} className=" flex flex-col">
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
  );
};

export default UpdateProfile;
