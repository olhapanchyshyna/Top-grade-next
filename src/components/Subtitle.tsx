import { cn } from "@/lib/utils";

type SubtitleProps = {
  text: string;
  className?: string;
};

export default function Subtitle({ text, className }: SubtitleProps) {
  return (
    <h3
      className={cn(
        `text-lg font-extralight uppercase text-gray-100 md:text-2xl lg:text-3xl lg:leading-[50px] xl:text-4xl`,
        className,
      )}
    >
      {text}
    </h3>
  );
}
