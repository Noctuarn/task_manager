"use client"

import React from "react";
import menuLinks from "./menu";
import { useRouter, usePathname } from "next/navigation";

const SideBar = () => {

  const router = useRouter();
  const pathName = usePathname()

  const routeHandler = (path: string) => {
    router.push(path)
  } 

  console.log(pathName);
  

  return (
    <aside className="h-full rounded-xl w-[15%] lg:w-[20%] bg-main-light shadow-2xl shadow-blue-100 py-12 flex flex-col">
      <div className="w-full flex px-5 items-center gap-4">
        <img
          src={
            "https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png"
          }
          alt="avatar-icon"
          className="w-[60px] h-[60px] self-center"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold cursor-pointer">Batman</span>
          <span className="text-gray-400 text-sm">batman@exaple.com</span>
        </div>
      </div>
      <ul className="flex flex-col mt-10">
        {menuLinks.map((el) => (
          <div className={`${pathName === "/" + el.value ? "border-r-4 border-black" : ""} w-full px-5 py-3 hover:bg-blue-100 flex gap-4 items-center cursor-pointer`} onClick={() => routeHandler(el.path)} key={el.name}>
            {el.icon} 
            <h4 className="text-lg font-semibold">{el.name}</h4>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;