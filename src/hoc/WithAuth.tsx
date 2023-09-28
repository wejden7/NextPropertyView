"use client";
import { useApp } from "@/context/appcontext";
import { useEffect } from "react";
import { notFound } from "next/navigation";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, CheckLogin } = useApp();

  useEffect(() => {
    CheckLogin();
  }, []);
  if (!isLoggedIn) notFound();
  return <div>{children}</div>;
};

export default WithAuth;
