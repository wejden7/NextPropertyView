import { BsHouseDoor } from "react-icons/bs";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col place-items-center bg-gray-100">
      <div className="flex gap-2 items-center  mt-8 ">
        <BsHouseDoor className="text-xl text-primary-500" />
        <h1 className="text-primary-500">NextProperty</h1>
      </div>

      <h1 className="mt-8 text-[150px] text-primary-100 font-bold">404</h1>
      <h1 className="text-xl font-bold text-primary-900">Page Not Found</h1>
      <p className="text-center text-sm text-gray-500 mt-8">
        This page wase not found may have mistyped the <br /> address or page
        may have moved
      </p>
      <Link href="/" className="text-xs mt-10 text-primary-100 ">
        Take me to the homme page
      </Link>
    </div>
  );
}

