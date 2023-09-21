import { DashboardLayout } from "../componentsDashborad/Layout";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component }: AppProps) {
 

  return (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
}

export default MyApp;
