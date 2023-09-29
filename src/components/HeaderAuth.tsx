"use client";
import { authenticated } from "@/slice/authenticationSlice";
import { PiUserCircleFill } from "react-icons/pi";
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileLink from "./ProfileLink";
import Cookies from "js-cookie";
import Link from "next/link";

const Loder = () => (
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

const LinkLogin = () => {
  return (
    <Link href="/signin" className="flex gap-2 items-center">
      <PiUserCircleFill className="text-white text-4xl" />
      <h1 className="text-white">Sign In</h1>
    </Link>
  );
};

const HeaderAuth = () => {
  const [loiding, setLoiding] = useState(true);
  const isAuthenticated = useSelector(authenticated);
  const refrechtoken = Cookies.get("refreshToken");
  useEffect(() => {
    setTimeout(() => setLoiding(false), 2000);
  }, []);
  if (loiding && refrechtoken) return <Loder />;
  return !isAuthenticated ? <LinkLogin /> : <ProfileLink />;
};

export default HeaderAuth;
