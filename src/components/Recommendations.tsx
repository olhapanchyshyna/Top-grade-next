import H2 from "./H2";
import Line from "./Line";

export default function Recommendations() {
  return (
    <section
      id="recommendations"
      className="bg-[url('/recommendation-bg.png')] bg-cover bg-no-repeat px-[20px] py-[50px] md:px-[40px] md:py-[80px] lg:px-[98px] lg:py-[132px]"
    >
      <H2
        text="98% come to us through recommendations"
        className="text-center"
      />
      <div className="mt-[20px] flex flex-col items-center rounded-[32px] bg-[#FFFFFF0D] px-[40px] py-[50px] text-base text-white md:mt-[54px] md:py-[64px] md:text-xl lg:px-[auto]">
        <div className="mb-[30px] max-w-[770px] text-center">
          The principal element of Suprematism in painting, as in architecture,
          is its liberation from all social or materialist tendencies. Through
          Suprematism, art comes into its pure and unpolluted form.
        </div>
        <Line />
        <div className="mt-[15px]">Name</div>
      </div>
    </section>
  );
}
