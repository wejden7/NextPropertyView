import Link from "next/link";
import { BsHouseDoor } from "react-icons/bs";
import WithAdmin from "@/hoc/WithAdmin";
import HeaderAuth from "./HeaderAuth";

export const Header = () => {
  return (
    <div className="w-full   h-16 bg-primary-100 flex items-center px-6  justify-between">
      <Link href="/" className="flex items-end  text-white ">
        <BsHouseDoor className="text-3xl  mr-1" />
        <h1 className=" text-sm">NEXT PROPERETY</h1>
      </Link>
      <div className="flex gap-4 items-center">
        <HeaderAuth />

        <WithAdmin notVisible={false}>
          <Link
            href="/dashboard"
            className=" text-primary-100 bg-white  py-2 px-8 font-semibold"
          >
            Dashboard
          </Link>
        </WithAdmin>
      </div>
    </div>
  );
};

export default Header;
