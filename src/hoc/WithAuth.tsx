"use client";
import { useEffect } from "react";
import { notFound } from "next/navigation";

const WithAuth = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
  }, []);
  if (!true) notFound();
  return <div>{children}</div>;
};

export default WithAuth;
