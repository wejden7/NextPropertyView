"use client";
import { notFound } from "next/navigation";
import { isAdmin } from "@/service/auth";
import { useEffect, useState } from "react";
import { getClientToken } from "@/service/token";
import { authenticated } from "@/slice/authenticationSlice";
import { useSelector } from "react-redux";

type props = {
  children: React.ReactNode;
  notVisible: boolean;
};

const WithAdmin = ({ children, notVisible }: props) => {
  const [admin, setAdmin] = useState(false);
  const isAuthenticated = useSelector(authenticated)

  useEffect(() => {
      getClientToken()
        .then((token) => isAdmin(token))
        .then(() => setAdmin(true))
        .catch(() => setAdmin(false));
  }, [isAuthenticated]);

 

  if (!admin && !notVisible) return null;
  if (!admin && notVisible) notFound();
  return <div>{children}</div>;
};

export default WithAdmin;
