import Logo from "./Logo";
import NavLink from "./NavLink";

const navItems = [
  { name: "Steps", src: "#steps" },
  { name: "Advantages", src: "#advantages" },
  { name: "Housing selection", src: "#growthPoint" },
  { name: "Recommendations", src: "#recommendations" },
];

export default function Footer() {
  return (
    <footer className="flex w-full items-center bg-[url('/footer-bg.png')] bg-cover bg-no-repeat px-[30px] py-[30px] sm:py-[50px] lg:py-[70px] lg:pl-[100px]">
      <div className="hidden lg:flex">
        <Logo />
      </div>
      <nav className="m-auto w-full max-w-[580px] lg:ml-[200px]">
        <ul className="flex max-w-[580px] flex-col items-center justify-between sm:flex-row">
          {navItems.map((item) => {
            return (
              <NavLink key={item.name} src={item.src}>
                <li className="my-[10px] text-[16px] text-gray-100 sm:my-[0px]">
                  {item.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
