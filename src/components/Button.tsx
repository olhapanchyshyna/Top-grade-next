import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `h-[61px] w-[314px] rounded-[100px] border border-white text-center text-base text-white md:text-lg`,
        className,
      )}
    >
      {text}
    </button>
  );
}
