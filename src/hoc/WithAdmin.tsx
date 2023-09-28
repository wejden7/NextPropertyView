"use client";
import { notFound } from "next/navigation";
import { isAdmin } from "@/service/auth";
import { useEffect, useState } from "react";
import { useApp } from "@/context/appcontext";
import { getClientToken } from "@/service/token";

type props = {
  children: React.ReactNode;
  notVisible: boolean;
};

const WithAdmin = ({ children, notVisible }: props) => {
  const [admin, setAdmin] = useState(false);
  const { isLoggedIn } = useApp();

  useEffect(() => {
      getClientToken()
        .then((token) => isAdmin(token))
        .then(() => setAdmin(true))
        .catch(() => setAdmin(false));
  }, [isLoggedIn]);

  console.log("HOC isAdminServer", admin);

  if (!admin && !notVisible) return null;
  if (!admin && notVisible) notFound();
  return <div>{children}</div>;
};

export default WithAdmin;
