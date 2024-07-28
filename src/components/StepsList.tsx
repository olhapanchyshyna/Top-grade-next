import { getRoutinCards } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { Unbounded } from "next/font/google";
import Line from "./Line";


const unbounded = Unbounded({ subsets: ["latin"] });

export default async function StepsList() {
  const allCards = await getRoutinCards(); // Получение данных
  const cardsItem = allCards.map((node: any) => node.routineCard); // Извлечение массива карточек (cards)

  return (
    <div className="m-auto mt-[30px] grid max-w-[1165px] grid-cols-1 justify-between justify-items-center gap-4 md:mt-[55px] md:grid-cols-2">
      {cardsItem.map((item: any) => {
        return (
          <div
            key={item.cardid}
            className={`flex h-[345px] w-[320px] flex-col rounded-[32px] bg-cover bg-no-repeat px-[40px] py-[30px] text-white md:h-[370px] md:pb-[50px] md:pt-[30px] lg:w-[430px] xl:h-[320px] xl:w-[568px] xl:pl-[48px] xl:pr-[140px]`}
            style={{
              background: item.cardBg ? item.cardBg : "",
              backgroundImage: `url(${item.cardBgImg?.node.sourceUrl})`,
            }}
          >
            <div
              className={cn(
                `mb-[22px] text-4xl font-light lg:text-5xl ${unbounded.className}`,
              )}
            >
              {item.cardid}
            </div>
            <div className="mb-[16px] max-w-[342px] text-lg font-semibold lg:text-xl">
              {item.cardtitle}
            </div>
            <Line className="h-[3px] w-[250px] xl:w-[359px]" />
            <div className="mt-[16px] max-w-[385px] text-sm font-normal lg:text-base">
              {item.descr}
            </div>
          </div>
        );
      })}
    </div>
  );
}
