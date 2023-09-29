"use client";
import { logout, user } from "@/slice/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserAvatar from "./Avatar";
import Link from "next/link";

const links = [
  { href: "/settings", name: "Paramétres" },
  { href: "/", name: "Personnaliser votre page d'accueil" },
  { href: "/", name: "confidentialité" },
];

const CardLinkUser = () => {
  const data = useSelector(user);
  return (
    <>
      <p className="text-xs px-2.5 py-1.5 text-slate-500">
        Actuellement connecté
      </p>
      <Link href="/profile" className="link flex items-center gap-2 mb-2">
        <UserAvatar color="green" label="W" size="sm" />

        <div>
          <p className="">{data?.name}</p>
          <p className="font-light text-sm  text-slate-500">{data?.role}</p>
          <p className="font-light text-sm  text-slate-500 w-40 truncate">
            {data?.email}
          </p>
        </div>
      </Link>
    </>
  );
};

const AvatarProfile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const signIn = () => dispatch(logout());

  return (
    <div className="relative z-50">
      <button onClick={() => setOpen((v) => !v)} className="">
        <UserAvatar color="white" label="W" size="xs" />
      </button>
      {open && (
        <div className=" w-64 min-w-max p-2  shadow-3xl  bg-white absolute top-14 right-0 translate-x-1/2 font-medium flex flex-col">
          <CardLinkUser />
          <p className="text-xs px-2.5 py-1.5 text-slate-500">Plus d’options</p>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="link">
              {link.name}
            </Link>
          ))}
          <button onClick={signIn} className="text-start link">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarProfile;
