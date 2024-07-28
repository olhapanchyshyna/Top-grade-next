import { cn } from "@/lib/utils";

type TextProps = {
  text: string;
  className?: string;
};

export default function Text({ text, className }: TextProps) {
  return (
    <div
      className={cn(`text-sm font-light md:text-base lg:text-lg`, className)}
    >
      {text}
    </div>
  );
}
