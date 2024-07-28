import H2 from "./H2";
import PointList from "./PointList";
import SmallSubtitle from "./SmallSubtitle";

export default function GrowthPoint() {
  return (
    <section
      id="growthPoint"
      className="bg-[#E5EAEB] px-[20px] py-[50px] md:px-[40px] md:py-[80px] lg:px-[98px] lg:py-[132px]"
    >
      <H2
        text="not an apartment, but a growth point"
        className="mb-[15px] max-w-[300px] text-black sm:mb-[30px] sm:max-w-[500px] lg:max-w-[750px]"
      />
      <SmallSubtitle
        text="To reach a new level, you need a quality environment and a motivating environment - choose yours"
        className="max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] "
      />
      <PointList />
    </section>
  );
}
