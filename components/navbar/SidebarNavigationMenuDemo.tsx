

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SheetDemo, AccordionDemo } from "@/components/index.js";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks,   } from "./Navbar";

export function SidebarNavigationMenuDemo() {
  const pathname = usePathname();
  return (
    <SheetDemo
      title="Menu"
      description=""
      side="left"
      contentClassName=" overflow-y-auto "
      trigger={
        <Button size="icon" variant="ghost" className="lg:hidden text-white">
          <Menu className="!h-[25px] !w-[25px]" />
        </Button>
      }
    >
      {(onClose) => (
        <nav className="navbar">
          <ul className="mt-[20px]">
            {navLinks.map((item) => {
              const activeLink =
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.title} className="list-none">
                  <a
                    href={item.href}
                    className={`block py-2 px-4 hover:bg-slate-100 rounded-md ${
                      activeLink ? "text-success" : ""
                    }`}
                    onClick={onClose}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
   
        
        </nav>
      )}
    </SheetDemo>
  );
}
