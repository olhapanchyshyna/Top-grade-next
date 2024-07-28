import { cn } from "@/lib/utils";

type SSmallSubtitleProps = {
  text: string;
  className?: string;
};

export default function SmallSubtitle({
  text,
  className,
}: SSmallSubtitleProps) {
  return (
    <h3
      className={cn(
        `text-sm font-light text-black sm:text-[18px] lg:text-[24px] lg:leading-[32px]`,
        className,
      )}
    >
      {text}
    </h3>
  );
}
