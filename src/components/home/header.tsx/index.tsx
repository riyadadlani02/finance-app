import React from "react";
import Link from "next/link";
import { Compass, Maximize, Search } from "lucide-react";

const HomeHeader = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="xs:flex justify-between items-center max-xs:space-y-5">
      <div className="flex flex-col">
        <span className="text-2xl font-bold max-sm:text-lg">Hello, Jane</span>
        <span className="text-muted-foreground text-lg max-sm:text-base">
          {formattedDate}
        </span>
      </div>
      <div className="flex space-x-3 ">
        <Link href={"#"}>
          <div className="flex px-3 bg-dark-gray h-8 space-x-3 rounded-full items-center">
            <Compass className="text-muted-foreground w-4" />
            <span className="text-muted-foreground text-xs font-semibold">
              For you
            </span>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="flex px-3 bg-dark-gray h-8 space-x-3 rounded-full items-center">
            <Maximize className="text-muted-foreground w-4" />
            <span className="text-muted-foreground text-xs font-semibold">
              Screener
            </span>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="flex px-2 bg-dark-gray h-8 rounded-full items-center">
            <Search className="text-muted-foreground w-4" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
