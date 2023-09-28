"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  link: {
    href: string;
    name: string;
  };
  index: number;
  base: string;
};
 const LinkActive = ({ link, index, base }: props) => {
  const pathname = usePathname();

  const isActive = (href: string, index: number) => {
    if (index === 0 && pathname?.replace(base, "").length === 0) return true;
    return pathname?.startsWith(href);
  };
  return (
    <Link
      className={` py-2 max-w-max transition-colors ease-in-out duration-300  font-medium  ${
        isActive(link.href, index)
          ? "border-b-2 px-0 mx-3 border-black"
          : "hover:rounded-lg hover:bg-slate-100 px-3"
      }`}
      href={link.href}
      key={link.name}
    >
      {link.name}
    </Link>
  );
};

export default LinkActive;