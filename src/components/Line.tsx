import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Line({ className }: { className?: string }) {
  return (
    <Image
      src="/card-line.svg"
      width={359}
      height={1}
      alt="white line"
      className={cn("", className)}
    />
  );
}
