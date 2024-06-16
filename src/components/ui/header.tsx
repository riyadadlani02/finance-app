"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavTypes = {
  id: number;
  tab?: string;
  title: string;
  path?: string;
  submenu?: NavTypes[];
};

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <header className="sticky border-b border-separator justify-center flex-col items-center left-0 right-0 top-0 z-10 bg-black/70   backdrop-blur ">
    <div
      className={cn(
        " h-[55px] flex max-w-screen-xl mx-auto px-10 items-center justify-between relative",
        className
      )}
      {...props}
    />
  </header>
);

const Start = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props} />
);

const End = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-x-3  max-lg:mr-6 flex", className)} {...props} />
);

const Button = ({
  type,
  className,
  children,
  to,
  ...props
}: {
  type?: "transparent" | "bordered" | undefined;
  className?: React.HTMLAttributes<HTMLElement>;
  to: string;
  children: ReactNode;
}) => (
  <Link
    href={to}
    className={cn(
      "px-5 py-[5px] text-sm rounded-lg transition-all",
      type === undefined && "bg-white  text-black hover:bg-[#eee]",
      type === "transparent" && "hover:bg-white/15 ",
      type === "bordered" && "border-2 py-[5px]",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);

const Nav = ({
  className,
  data,
  ...props
}: {
  className?: string;
  data: NavTypes[];
}) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(-1);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <nav
        id="navbarCollapse"
        className={`navbar   absolute right-3 z-30 w-[250px] px-6 py-4 duration-300 rounded-lg   border lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 bg-black  ${
          navbarOpen
            ? "visibility top-full opacity-100 "
            : "invisible top-[120%] opacity-0 "
        }`}
      >
        <ul className="block lg:flex lg:space-x-12  items-center ">
          {data.map((menuItem, index) => (
            <li key={index} className="group relative ">
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className={cn(
                    `flex text-sm lg:mr-0 lg:inline-flex lg:px-0 items-center ${
                      pathname === `${menuItem.path}` ||
                      pathname.includes(`${menuItem.path}`)
                        ? "text-white "
                        : "text-white/70 hover:text-white"
                    }`,
                    className
                  )}
                  {...props}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <p
                    onClick={() => handleSubmenu(index)}
                    className="flex text-sm cursor-pointer items-center justify-between py text-dark  text-white/70 group-hover:text-white lg:inline-flex lg:px-0 lg:-mr-2"
                  >
                    {menuItem.title}
                    <span className="pl-2">
                      <svg width="25" height="24" viewBox="0 0 25 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </p>
                  <div
                    className={`backdrop-blur  relative left-0 top-full transition-[top] max-lg:pl-4 duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full rounded-lg lg:border border bg-black    ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu?.map((submenuItem, index) => (
                      <Link
                        href={`${submenuItem.path}`}
                        key={index}
                        className="block rounded py-2.5 text-sm text-white/70 hover:text-white lg:px-3"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={navbarToggleHandler}
        id="navbarToggler"
        aria-label="Mobile Menu"
        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-2 py-[6px] lg:hidden"
      >
        <span
          className={`relative my-1.5 block h-[1px] w-[25px]  transition-all duration-300 bg-white ${
            navbarOpen ? " top-[7px] rotate-45" : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-[1px] w-[25px]  transition-all duration-300 bg-white ${
            navbarOpen ? "opacity-0 " : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-[1px] w-[25px]  transition-all duration-300 bg-white ${
            navbarOpen ? " top-[-8px] -rotate-45" : " "
          }`}
        />
      </button>
    </>
  );
};

export { Header, Start, Nav, End, Button };
