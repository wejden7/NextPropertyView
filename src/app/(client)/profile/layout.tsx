import UserAvatar from "@/components/Avatar";
import LinkActive from "@/components/LinkActive";
import Link from "next/link";

const navLinks = [
  { href: "/profile/request", name: "Request" },
  { href: "/profile/registered", name: "Registered" },
];

type props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: props) {
  return (
    <div className="bg-white min-h-bas ">
      <div className="flex flex-col gap-4 items-center   pt-4 mb-4">
        <UserAvatar color="green" label="W" size="xl" />

        <p className="text-3xl  font-semibold text-primary-900">Wejden</p>
        <p className="text-sm text-slate-500">@wejdenchneti</p>
        <Link href="/settings/modify-the-profile" className="btn">
          Modify the profile
        </Link>
      </div>
      <div className="flex justify-center gap-2">
        {navLinks.map((link, index) => {
          return <LinkActive link={link} index={index} base="/profile" />;
        })}
      </div>
      {children}
    </div>
  );
}
