import * as yup from "yup";

export const schemaSignup = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  telephone_number: yup.string().required("Telephone number is required"),
  id_number: yup.string().required("id_number is required"),
  role: yup.number().min(2).required("role is required"),
});
export const schemaUpdateProfile = yup.object().shape({
  name: yup.string().required("Name is required"),
  telephone_number: yup.string().required("Telephone number is required"),
  id_number: yup.string().required("id_number is required"),
});

export const schemaSignin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const shemaForgetPassword = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const shemaResettPassword = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
