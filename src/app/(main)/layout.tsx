import Sidebar from "@/components/sidebar";
import React, { Suspense } from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full overflow-y-auto px-default-x py-default-y max-md:px-10 max-sm:px-5">
        <Suspense>{props.children}</Suspense>
      </div>
    </div>
  );
};

export default Layout;
