import { Logo, MiniLogo } from "@/components/Logo";
import { ToggleSidebar } from "./Button";

const SideBar = ({ open, clicke }: { open: boolean; clicke: () => void }) => {
  return (
    <div
      className={`group  min-h-screen bg-primary-100 fixed  transition-all ease-in-out duration-300  ${
        open ? "w-sideBarOpen" : "w-sideBarClose"
      } `}
    >
      {open ? <Logo /> : <MiniLogo />}

      <ToggleSidebar open={open} clicke={clicke} />
    </div>
  );
};

export default SideBar;
