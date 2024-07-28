import Image from "next/image";
import H2 from "./H2";
import Text from "./Text";

export default function HelpGrowBudget() {
  return (
    <section className="flex flex-col items-center justify-between bg-[#111827] px-[20px] py-[50px] sm:flex-row md:px-[40px] md:py-[80px] lg:px-[98px] lg:py-[132px]">
      <div className="boxShadowBudget order-2 flex max-w-[320px] flex-col items-center rounded-[32px] bg-[#FFFFFF1A] sm:order-none sm:max-w-none xl:flex-row xl:items-end xl:pl-[35px]">
        <div className="my-[20px] max-w-[190px] text-center text-lg uppercase leading-6 text-white xl:mb-[40px] xl:mr-[20px] xl:text-left ">
          real estate as a high profitable investment
        </div>
        <Image
          src="/man-with-phone.png"
          alt="man-with-phone"
          width={322}
          height={326}
        />
      </div>
      <div className="order-1 mb-[20px] ml-[40px] flex flex-col sm:order-none sm:mb-[0px] sm:items-end">
        <H2
          text="Not enough budget?"
          className="mb-[30px] max-w-[360px] lg:max-w-[470px]"
        />
        <Text
          text="We will help you grow capital through real estate investments"
          className="max-w-[250px] text-xl text-white md:text-2xl lg:max-w-[320px]"
        />
      </div>
    </section>
  );
}
