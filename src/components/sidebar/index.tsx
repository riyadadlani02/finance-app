"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import menuData from "@/lib/constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  const isActive = (menuItemPath: string) => {
    if (menuItemPath === "/dashboard") {
      return pathName === "/dashboard";
    }
    return pathName.includes(menuItemPath);
  };

  return (
    <>
      <aside className="px-2 bg-[#111317] flex items-center flex-col justify-center">
        <div className="font-bold w-full py-5 justify-center flex  items-center absolute top-0">
          <Image src={"/okb-okb-logo.png"} alt="logo" width={30} height={30} />
        </div>
        <nav className=" ">
          <div className="space-y-5">
            <TooltipProvider>
              {menuData.map((menuItem, index) => (
                <ul key={index}>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <li>
                        <Link href={menuItem.path}>
                          <menuItem.Component
                            active={isActive(menuItem.path)}
                          />
                        </Link>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-black/10 backdrop-blur-xl"
                    >
                      <p className="text-white">{menuItem.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </ul>
              ))}
            </TooltipProvider>
          </div>
        </nav>
      </aside>
      <div className="bg-gradient-to-b from-[#111317] via-border to-[#111317] w-0.5" />
    </>
  );
};

export default Sidebar;
