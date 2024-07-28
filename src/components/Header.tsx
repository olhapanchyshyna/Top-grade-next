import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLink from "./NavLink";

const navItems = [
  { name: "Steps", src: "#steps" },
  { name: "Advantages", src: "#advantages" },
  { name: "Housing selection", src: "#growthPoint" },
  { name: "Recommendations", src: "#recommendations" },
];

export default function Header() {
  return (
    <header className="absolute right-0 h-[40px] w-[50px] flex-col lg:relative lg:mt-[30px] lg:h-[185px] lg:w-[175px]">
      <nav className="mr-[10px] h-[85px] lg:h-[185px]">
        <ul className="hidden h-[185px] flex-col justify-between lg:flex">
          {navItems.map((item) => {
            return (
              <NavLink key={item.name} src={item.src}>
                <li className="text-[16px] text-gray-100">{item.name}</li>
              </NavLink>
            );
          })}
        </ul>
        <ul className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[100px]">
              <Image
                src="/menu-icon.svg"
                alt="white line"
                width={30}
                height={24}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-[10px]">
              {navItems.map((item) => {
                return (
                  <DropdownMenuItem key={item.name}>
                    <NavLink src={item.src}>{item.name}</NavLink>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>
    </header>
  );
}
