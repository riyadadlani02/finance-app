import { SideMenu } from "./types";
import { SearchIcon } from "@/components/icons/search";
import { BookIcon } from "@/components/icons/book";
import { HomeIcon } from "@/components/icons/home";
import { BookMarkIcon } from "@/components/icons/bookmark";
import { SettingsIcon } from "@/components/icons/settings";

const menuData: SideMenu[] = [
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

export default menuData;
