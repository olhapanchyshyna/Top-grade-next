import Free from "./Free";
import H2 from "./H2";
import StepsList from "./StepsList";
import Subtitle from "./Subtitle";

export default function Steps() {
  return (
    <section
      id="steps"
      className="bg-[#111827] px-[20px] py-[50px] md:px-[40px] md:py-[80px] lg:px-[70px] lg:py-[120px] "
    >
      <H2 text="we take the whole routine" className="text-center" />
      <Subtitle text="when buying real estate" className="text-center" />
      <StepsList />
      <Free />
    </section>
  );
}
