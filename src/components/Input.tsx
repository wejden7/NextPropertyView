import { useState } from "react";
import { Control, FieldError } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Controller } from "react-hook-form";

import Select from "react-select";
type props = {
  register: any;
  errors: FieldError | undefined;
  placeholder: string;
};
export const InputBas = ({ register, errors, placeholder }: props) => {
  return (
    <div className={` w-1/2 h-16 `}>
      <input
        type="text"
        {...register}
        placeholder={placeholder}
        className={`input-base bg-slate-50  ${errors && "input-error"}`}
      />
      {errors && (
        <p className="text-xs text-red-500 w-full text-end">{errors.message}</p>
      )}
    </div>
  );
};

type propspassword = {
  register: any;
  errors: FieldError | undefined;
  placeholder: string;
};

export const InputPassword = ({
  register,
  errors,
  placeholder,
}: propspassword) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((v) => !v);
  };
  return (
    <div className={` w-1/2 h-16 relative `}>
      <input
        type={showPassword ? "text" : "password"}
        {...register}
        placeholder={placeholder}
        className={`input-base  ${errors && "input-error"}`}
      />
      {errors && (
        <p className="text-xs text-red-500  text-end">{errors.message}</p>
      )}
      <button
        className="absolute top-1/2 right-4 -translate-y-4 text-xl"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </div>
  );
};

type propsselect = {
  placeholder: string;
  options: Array<{
    value: number;
    label: string;
  }>;
  control: Control<any>;
  errors: FieldError | undefined;
  name: string;
};
export const SelectBase = (data: propsselect) => {
  const { placeholder, options, control, errors, name } = data;
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: errors ? "1px solid red" : "1px solid #000",
      borderRadius: "0",
      height: "3rem",
      boxShadow: state.isFocused ? "" : "none",
      "&:hover": {
        borderColor: errors ? "red" : "black", // Change the border color on hover
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#396a08" : "white",
      color: state.isSelected ? "white" : "black",
      "&:active": {
        backgroundColor: "#569f0d",
      },
    }),
  };

  return (
    <div className="w-1/2 h-12">
      <Controller
        name={name}
        control={control}
        render={({
          field: { value: langValue, onChange: langOnChange, ...restLangField },
        }) => (
          <Select
            className="w-full"
            value={
              langValue ? options.find((x) => x.value === langValue) : langValue
            }
            onChange={(option: any) =>
              langOnChange(option ? option.value : option)
            }
            options={options}
            {...restLangField}
            placeholder={placeholder}
            styles={customStyles}
          />
        )}
      />
      {errors && (
        <p className="text-xs text-red-500 w-full text-end">errors.message</p>
      )}
    </div>
  );
};
