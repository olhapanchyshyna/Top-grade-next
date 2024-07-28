import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import CardContent from "./CardContent";
import H2 from "./H2";

const cardsItem = [
  {
    id: 1,
    title: "Name",
    description: "Customer Service Department",
  },
  {
    id: 2,
    title: "Name",
    description: "Analytics department",
  },
  {
    id: 3,
    title: "Name",
    description: "Support department",
  },
  {
    id: 4,
    title: "Name",
    description: "department",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-[#111827] px-[20px] py-[50px] md:px-[40px] md:py-[80px] lg:px-[98px] lg:py-[130px]">
      <H2 text="selected the best" className="" />
      <h2 className="mt-[15px] max-w-[450px] text-2xl font-thin uppercase text-white lg:max-w-[870px] lg:text-4xl">
        so that you get not only the result, but also pleasure from the process
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="my-[60px] w-full max-w-6xl text-white"
      >
        <CarouselContent className="-ml-1">
          {cardsItem.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className="flex flex-col items-center pl-6 md:basis-1/2 lg:basis-1/3 lg:items-start"
              >
                <Image
                  src="/man.png"
                  alt="man"
                  width={450}
                  height={580}
                  className="mx-auto mb-[32px] max-w-[300px] rounded-[32px] lg:w-full lg:max-w-none"
                />
                <CardContent item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-[10px] top-[110%] w-[150px] bg-transparent sm:left-[20px] sm:top-[105%] md:top-[115%]" />
        <CarouselNext className="right-[10px] top-[110%] w-[150px] bg-transparent sm:right-[20px] sm:top-[105%] md:top-[115%]" />
      </Carousel>
    </section>
  );
}