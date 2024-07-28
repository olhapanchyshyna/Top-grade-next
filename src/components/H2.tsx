import { cn } from "@/lib/utils";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

type H2Props = {
  text: string;
  className?: string;
};

export default function H2({ text, className }: H2Props) {
  return (
    <h2
      className={cn(
        `text-2xl uppercase text-gray-100 sm:text-4xl md:text-[36px] md:leading-[50px] lg:text-[56px] lg:leading-[75px] ${unbounded.className}`,
        className,
      )}
    >
      {text}
    </h2>
  );
}
