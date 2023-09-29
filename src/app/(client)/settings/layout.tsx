import LinkActive from "@/components/LinkActive";

type props = {
  children: React.ReactNode;
};
const navLinks = [
  { href: "/settings/modify-the-profile", name: "Modify the profile" },
  { href: "/settings/managing-your-account", name: "Managing your account" },
  { href: "/settings/privacy-and-datat", name: "Privacy and data" },
  { href: "/settings/security", name: "Security" },
];
export default function RootLayout({ children }: props) {
  return (
    <div className="bg-white min-h-bas flex relative ">
      <div className="w-[300px] scrollbar h-base p-4 overflow-y-scroll fixed ">
        <div className="flex flex-col gap-2">
          {navLinks.map((link, index) => {
            return (
              <LinkActive
                key={index}
                link={link}
                index={index}
                base="/settings"
              />
            );
          })}
        </div>
      </div>
      <div className="ml-[300px]  pl-8    flex-1">{children}</div>
    </div>
  );
}
