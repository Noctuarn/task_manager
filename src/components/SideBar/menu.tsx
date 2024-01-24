import { IoIosHome } from "react-icons/io";
import { LiaTasksSolid } from "react-icons/lia";
import { IoPieChartSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { ReactNode } from "react";

type MenuLinks = {
  name: string;
  value: string;
  path: string;
  icon: any;
};

export const menuLinks: Array<MenuLinks> = [
  {
    name: "All tasks",
    value: "",
    icon: <IoIosHome className="text-2xl" />,
    path: "/",
  },
  {
    name: "Completed",
    value: "completed",
    icon: <LiaTasksSolid className="text-2xl" />,
    path: "/completed",
  },
  {
    name: "Statistics",
    value: "statistics",
    icon: <IoPieChartSharp className="text-2xl" />,
    path: "/statistics",
  },
  {
    name: "About",
    value: "about",
    icon: <FaInfoCircle className="text-2xl" />,
    path: "/about",
  },
];

export default menuLinks;
