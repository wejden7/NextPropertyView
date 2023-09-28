"use client";
import { useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import SideBar from "@/components/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex relative">
      <SideBar open={open} clicke={() => setOpen((v) => !v)} />
      <main
        className={`flex-1 bg-gray-100 flex flex-col px-4 pb-4 transition-all ease-in-out duration-300 min-h-screen ${
          open ? "ml-sideBarOpen" : "ml-sideBarClose"
        }`}
      >
        <Breadcrumbs />
        <div className="flex-1 border-2 border-gray-200">{children}</div>
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default DashboardLayout;
