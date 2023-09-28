"use client";
import Link from "next/link";
import { PiUserCircleFill } from "react-icons/pi";

import { useApp } from "@/context/appcontext";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ProfileLink from "./ProfileLink";

const HeaderAuth = () => {
  const [loiding, setLoiding] = useState(true);
  const { isLoggedIn, CheckLogin } = useApp();
  useEffect(() => {
    CheckLogin();
    setTimeout(() => {
      setLoiding(false);
    }, 2000);
  }, []);

  if (loiding)
    return (
      <TailSpin
        height="30"
        width="30"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  return !isLoggedIn ? (
    <Link href="/signin" className="flex gap-2 items-center">
      <PiUserCircleFill className="text-white text-4xl" />
      <h1 className="text-white">Sign In</h1>
    </Link>
  ) : (
    <ProfileLink />
  );
};

export default HeaderAuth;
