import Image from "next/image";
import H2 from "./H2";
import Text from "./Text";

export default function Free() {
  return (
    <div className="m-auto mt-[120px] flex h-auto max-w-[1172px] flex-col items-center rounded-[32px] bg-[#FFFFFF0D] px-[20px] pb-[30px] md:h-[440px] md:flex-row md:px-[0px] md:pb-[0px] md:pr-[40px] lg:h-[499px] lg:items-baseline">
      <Image
        src="/agreement.png"
        alt="agreement"
        width={550}
        height={390}
        className="my-auto h-[300px] w-[350px] md:h-[360px] md:w-[450px] xl:h-[390px] xl:w-[550px]"
      />
      <div className="mt-[0px] lg:mt-[100px]">
        <H2 text="Free for you" />
        <Text
          className="ml-[30px] mt-[40px] max-w-[450px] text-white lg:ml-[60px] lg:mt-[70px]"
          text={`You don't pay anything - we receive a reward from the developer you choose. So that you understand what kind of work we perform, we immediately sign an agreement with you, where it is clearly stated that nothing is forgotten.`}
        />
      </div>
    </div>
  );
}
