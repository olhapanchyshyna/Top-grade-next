import { cn } from "@/lib/utils";
import { Unbounded } from "next/font/google";
import CardContent from "./CardContent";

const cardsItem = [
  {
    id: 1,
    title: "We find what meets your requirements",
    description:
      "Request analysis, selection of options, organization of impressions",
    bg: "bg-[url('/steps-card-1-bg.png')]",
  },
  {
    id: 2,
    title: "We'll keep you informed",
    description:
      "We share news about how the area is developing and how construction is going. We inform you in advance about the commissioning of the house",
    bg: "bg-[#3327B9]",
  },
  {
    id: 3,
    title:
      "We help in accepting the apartment upon transfer from the developer",
    description:
      "Before accepting the apartment and signing the documents, we will find all the shortcomings that can be corrected at the expense of the developer",
    bg: "bg-[#7167E9]",
  },
  {
    id: 4,
    title: "We take care of the property registration process",
    description: "Bureaucracy",
    bg: "bg-[url('/steps-card-2-bg.png')]",
  },
];

const unbounded = Unbounded({ subsets: ["latin"] });

export default function StepsList() {
  return (
    <div className="m-auto mt-[30px] grid max-w-[1165px] grid-cols-1 justify-between justify-items-center gap-4 md:mt-[55px] md:grid-cols-2">
      {cardsItem.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex h-[345px] w-[320px] flex-col rounded-[32px] bg-cover bg-no-repeat px-[40px] py-[30px] text-white md:h-[370px] md:pb-[50px] md:pt-[30px] lg:w-[430px] xl:h-[320px] xl:w-[568px] xl:pl-[48px] xl:pr-[140px] ${item.bg}`}
          >
            <div
              className={cn(
                `mb-[22px] text-4xl font-light lg:text-5xl ${unbounded.className}`,
              )}
            >
              {item.id}
            </div>
            <CardContent item={item} />
          </div>
        );
      })}
    </div>
  );
}