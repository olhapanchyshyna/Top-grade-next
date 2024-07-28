"use client";
import React, { Dispatch, SetStateAction } from "react";
import ScrollIntoView from "react-scroll-into-view";

type NavLinkProps = {
  children: React.ReactNode;
  src: string;
  setIsSheetOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function NavLink({
  children,
  src,
  setIsSheetOpen,
}: NavLinkProps) {
  return (
    <ScrollIntoView
      selector={src}
      onClick={() => {
        if (setIsSheetOpen) {
          setIsSheetOpen(false);
        }
      }}
    >
      <span>{children}</span>
    </ScrollIntoView>
  );
}
