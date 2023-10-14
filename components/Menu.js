import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Menu = () => {
  const path = usePathname();
  console.log(path);

  const navElements = [
    // icons classes from remix-icons
    { link: "/", icon: "ri-home-heart-line", label: "Home" },
    {
      link: "/transactions",
      icon: "ri-copper-diamond-line",
      label: "Transactions",
    },
  ];

  return (
    <>
    <div className=" clear-both h-4"></div>
      <div className="bottom-0 -mx-4 fixed flex justify-center shadow-[0px_0px_50px_1px_#00000024]    w-screen bg-white">
        {navElements.map((element) => {
          const activeClass =
            element.link == path
              ? "dark:bg-emerald-800 border-t-emerald-700 bg-emerald-100"
              : "";
          return (
            <div
              key={element.link}
              className={`item flex gap-2 justify-center  self-center   px-6 py-2 border-t-4 ${activeClass}`}
            >
              <Link href={element.link} className="flex gap-2">
                <i
                  className={`${element.icon} text-xl  dark:text-white font-bold text-emerald-700 `}
                  title="Home"
                ></i>
                <p className="self-center hidden lg:block dark:text-white text-emerald-700 font-bold">
                  {element.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
