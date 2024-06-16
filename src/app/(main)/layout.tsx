import Sidebar from "@/components/sidebar";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full overflow-y-auto px-default-x py-default-y max-md:px-10 max-sm:px-5">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
