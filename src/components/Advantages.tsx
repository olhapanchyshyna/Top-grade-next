import H2 from "./H2";

import { Unbounded } from "next/font/google";
import AdvantagesList from "./AdvantagesList";

const unbounded = Unbounded({
  subsets: ["latin"],
});

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="relative mx-[30px] mb-[60px] max-w-[1260px] rounded-[32px] bg-[#3327B9] px-[20px] pb-[20px] pt-[50px] md:px-[40px] md:pb-[40px] md:pt-[70px] lg:px-[70px] lg:py-[70px] xl:m-auto xl:mb-[100px]"
    >
      <H2 text="We act in your interests" />
      <div
        className={`text-xl font-extralight uppercase text-gray-100 sm:text-2xl lg:text-[32px] ${unbounded.className}`}
      >
        but don’t forget about ourselves
      </div>

      <AdvantagesList />
    </section>
  );
}
