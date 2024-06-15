"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { Compass, Maximize, Search } from "lucide-react";
import Link from "next/link";

export const Home = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-default-x py-default-y">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Hello, Jane</span>
          <span className="text-muted-foreground text-lg">{formattedDate}</span>
        </div>
        <div className="flex space-x-3">
          <Link href={"#"}>
            <div className="flex px-3 bg-[#201f22] h-8 space-x-3 rounded-full items-center">
              <Compass className="text-muted-foreground w-4" />
              <span className="text-muted-foreground text-xs font-semibold">
                For you
              </span>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex px-3 bg-[#201f22] h-8 space-x-3 rounded-full items-center">
              <Maximize className="text-muted-foreground w-4" />
              <span className="text-muted-foreground text-xs font-semibold">
                Screener
              </span>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex px-2 bg-[#201f22] h-8 rounded-full items-center">
              <Search className="text-muted-foreground w-4" />
            </div>
          </Link>
        </div>
      </div>
      <Separator className="my-10 bg-muted" />
    </div>
  );
};
