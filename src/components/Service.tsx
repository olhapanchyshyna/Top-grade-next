import Image from "next/image";
import H2 from "./H2";
import Text from "./Text";

export default function Service() {
  return (
    <section className="flex flex-col items-center justify-between px-[20px] py-[50px] md:flex-row md:px-[40px] md:py-[80px] lg:px-[98px] lg:py-[120px]">
      <div className="order-3 flex flex-col items-center justify-between md:order-none md:mr-[30px]">
        <H2
          text="premium service like in Mercedes"
          className="hidden max-w-[600px] text-[#27252E] md:flex"
        />
        <div className="max-w-[340px] lg:max-w-[430px]">
          <Text
            className="mb-[30px] mt-[30px] text-start md:mt-[60px] lg:my-[60px]"
            text="TOP GRADE agency was created for those who value service, pleasure from the process, and not the result tortured in the struggle. We are changing the market - the lack of service from the developer should not affect the buyer in any way."
          />
          <Text
            className="text-end md:text-start"
            text="Everyone promises premium service, but no one explains what it is. I have 17 years of experience in premium customer service, I was one of the top 10 Mercedes sales managers in Russia, and I am used to treating the client as a partner, and not as a bag of money and cockroaches in my head."
          />
        </div>
      </div>
      <H2
        text="premium service like in Mercedes"
        className="order-1 mb-[40px] max-w-[600px] text-center text-[#27252E] md:order-none md:hidden"
      />
      <div className="order-2 max-w-[250px] md:order-none md:max-w-[450px]">
        <Image
          src="/man.png"
          alt="man"
          width={450}
          height={580}
          className="boxShadowImg rounded-[32px]"
        />
      </div>
    </section>
  );
}
