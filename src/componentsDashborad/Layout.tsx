import { useState } from "react";
import "../app/globals.css";
import { AiFillCaretLeft } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import ScrollToTopButton from "./ScrollToTopButton";
import Breadcrumbs from "./Breadcrumbs";

const ButtonOpenCloseSideBar = ({
  open,
  clicke,
}: {
  open: boolean;
  clicke: () => void;
}) => {
  return (
    <button
      className={`${
        open ? "rotate-0" : "rotate-180"
      } opacity-0 group-hover:opacity-100 ease-in-out duration-300 transition-opacity bg-primary-500 text-white w-12 h-12 grid place-items-center rounded-full absolute shadow-md -right-6 top-1/2 transform -translate-y-6`}
      onClick={clicke}
    >
      <AiFillCaretLeft className="text-2xl" />
    </button>
  );
};

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(true);
  const widthOpenSidBar = "w-60";
  const widthCloseSidBar = "w-20";
  const marginOpenSideBar = "ml-60";
  const marginCloseSideBar = "ml-20";
  return (
    <div className="flex relative">
      <div
        className={` ${
          open ? widthOpenSidBar : widthCloseSidBar
        } group  min-h-screen bg-primary-100 fixed left-0 transition-all ease-in-out duration-300 `}
      >
        <div className="p-4">
          <BsHouseDoor className="text-3xl text-primary-900 text-center w-full" />
          {open && (
            <>
              <h1 className="text-center leading-4 text-xl font-bold text-white">
                Next
              </h1>
              <h1 className="text-center leading-3 text-xl font-bold text-primary-500">
                Property
              </h1>
            </>
          )}
        </div>

        <ButtonOpenCloseSideBar open={open} clicke={() => setOpen((v) => !v)} />
      </div>
      <main
        className={`flex-1 bg-gray-100 flex flex-col ${
          open ? marginOpenSideBar : marginCloseSideBar
        }  px-4 pb-4 transition-all ease-in-out duration-300 min-h-screen`}
      >
        <Breadcrumbs />
        <div className="flex-1 border-2 border-gray-200">{children}</div>
      </main>
      <ScrollToTopButton />
    </div>
  );
};
