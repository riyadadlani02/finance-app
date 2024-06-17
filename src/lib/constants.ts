import { SearchIcon } from "@/components/icons/search";
import { BookIcon } from "@/components/icons/book";
import { HomeIcon } from "@/components/icons/home";
import { BookMarkIcon } from "@/components/icons/bookmark";
import { SettingsIcon } from "@/components/icons/settings";

export const menuData: SideMenu[] = [
  {
    title: "Home",
    path: "/dashboard",
    Component: HomeIcon,
  },
  {
    title: "Search",
    path: "/dashboard/search",
    Component: SearchIcon,
  },
  {
    title: "Book",
    path: "/dashboard/book",
    Component: BookIcon,
  },
  {
    title: "Saves",
    path: "/dashboard/saves",
    Component: BookMarkIcon,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    Component: SettingsIcon,
  },
];

export const navData: HeaderNav[] = [
  {
    id: 0,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 1,
    title: "About us",
    path: "/#",
  },
  {
    id: 2,
    title: "Pricing",
    path: "/#",
  },
];

export const timeframe: TF[] = [
  {
    id: "1h",
    name: "1H",
  },
  {
    id: "2h",
    name: "2H",
  },
  {
    id: "4h",
    name: "4H",
  },
  {
    id: "1day",
    name: "1D",
  },
  {
    id: "1week",
    name: "1W",
  },
  {
    id: "1month",
    name: "1M",
  },
];
