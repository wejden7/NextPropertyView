"use client";
import { useApp } from "@/context/appcontext";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import UserAvatar from "./Avatar";

const AvatarProfile = () => {
  const [open, setOpen] = useState(false);

  const { isLoggedIn, CheckLogin } = useApp();
  const signIn = () => {
    Cookies.remove("token");
    CheckLogin();
  };
  return (
    <div className="relative z-50">
      <button onClick={() => setOpen((v) => !v)} className="">
        <UserAvatar color="white" label="W" size="xs" />
      </button>
      {open && (
        <div className=" w-64 min-w-max p-2  shadow-3xl  bg-white absolute top-14 right-0 translate-x-1/2 font-medium flex flex-col">
          <p className="text-xs px-2.5 py-1.5 text-slate-500">
            Actuellement connecté
          </p>
          <Link href="/profile" className="link flex items-center gap-2 mb-2">
            <UserAvatar color="green" label="W" size="sm" />

            <div>
              <p className="">Wejden</p>
              <p className="font-light text-sm  text-slate-500">admin</p>
              <p className="font-light text-sm  text-slate-500 w-40 truncate">
                wejdenchneti@gmail.com..
              </p>
            </div>
          </Link>
          <p className="text-xs px-2.5 py-1.5 text-slate-500">Plus d’options</p>
          <Link href="/settings" className="link">
            Paramétres
          </Link>
          <p className="link">Personnaliser votre page d'accueil</p>
          <p className="link">confidentialité</p>
          <button onClick={signIn} className="text-start link">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarProfile;
