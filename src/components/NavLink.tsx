"use client";
import { handleSmoothScroll } from "@/lib/handleSmoothScroll";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  children: React.ReactNode;
  src: string;
};

export default function NavLink({ children, src }: NavLinkProps) {
  return (
    <Link href={src} onClick={handleSmoothScroll}>
      {children}
    </Link>
  );
}
