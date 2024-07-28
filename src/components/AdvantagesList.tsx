import CardContent from './CardContent'


const cardsItem = [
  {
    id: 1,
    title: "Simplicity",
    description:
      "We make the process simple with minimal involvement, we involve you only in key moments",
  },
  {
    id: 2,
    title: "Safety",
    description:
      "We work in a transparent manner, your money is protected by law at the state level (the funds are in your special account)",
  },
  {
    id: 3,
    title: "Benefit",
    description: "We do not take fixed fees, most of the income is yours",
  },
];

export default function AdvantagesList() {
  return (
    <div className="mt-[65px] flex flex-wrap items-center justify-center lg:justify-between ">
      {cardsItem.map((item) => {
        return (
          <div
            key={item.id}
            className="mx-[5px] mb-[40px] flex w-[320px] flex-col text-white"
          >
            <CardContent item={item} />
          </div>
        );
      })}
    </div>
  );
}
