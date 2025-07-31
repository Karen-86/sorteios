"use client";

import React from "react";
import localData from "@/localData";
import {  ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";

const { logo } = localData.images;

export const navLinks = [
  { title: "HOME", href: "/" },
  { title: "COMO FUNCIONA", href: "#como-funciona" },
  { title: "PRÓXIMOS SORTEIOS", href: "#proxima-soreios" },
  { title: "SORTEIOS REALIZADOS", href: "#sorteios-relizados" },
  { title: "DEPOIMENTOS", href: "#depoimentos" },
];



export default function Navbar() {
  return (
    <nav className="navbar mx-[12px]">
      <div className="container  py-7 flex items-center justify-between ">
        <img src={logo} alt="" className="max-w-[130px] xl:max-w-[170px] h-auto " />

        <NavigationMenuDemo />

        <SidebarNavigationMenuDemo />

        <div className="btn-group  gap-2 hidden lg:flex">
          <ButtonDemo  text="Login" className="rounded-full" size='lg' />
        </div>
      </div>
    </nav>
  );
}
