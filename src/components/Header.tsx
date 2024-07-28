"use client";

import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

const navItems = [
  { name: "Steps", src: "#steps" },
  { name: "Advantages", src: "#advantages" },
  { name: "Housing selection", src: "#growthPoint" },
  { name: "Recommendations", src: "#recommendations" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="absolute right-0 h-[40px] w-[50px] flex-col lg:relative lg:mt-[30px] lg:h-[185px] lg:w-[175px]">
      <nav className="mr-[10px] h-[85px] lg:h-[185px]">
        <ul className="hidden h-[185px] flex-col justify-between lg:flex ">
          {navItems.map((item) => (
            <NavLink key={item.name} src={item.src} setIsSheetOpen={setIsSheetOpen}>
              <li className="text-[16px] text-gray-100">{item.name}</li>
            </NavLink>
          ))}
        </ul>
        <ul className="flex lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="w-[100px]">
              <Image
                src="/menu-icon.svg"
                alt="menu icon"
                width={30}
                height={24}
              />
            </SheetTrigger>
            <SheetContent
              onCloseAutoFocus={(e) => e.preventDefault()}
              side="right"
              className=" bg-[#774aa2] max-w-[250px]"
            >
              <SheetDescription className="flex flex-col p-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="text-[18px] text-white relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground"
                  >
                    <NavLink src={item.src} setIsSheetOpen={setIsSheetOpen}>
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </ul>
      </nav>
    </header>
  );
}
