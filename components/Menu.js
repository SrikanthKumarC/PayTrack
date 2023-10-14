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
    {
      link: "/debt",
      icon: "ri-scales-3-line",
      label: "Debt Manager",
    },
  ];

  return (
    <>
      <div className="bottom-0 -mx-4 fixed flex justify-center shadow-[0px_0px_50px_1px_#00000024] dark:bg-emerald-900   w-screen bg-white">
        {navElements.map((element) => {
          const activeClass =
            element.link == path
              ? "dark:bg-emerald-800 border-t-emerald-700 bg-emerald-100 font-bold"
              : "dark:border-t-emerald-900 border-t-white";
          return (
            <Link key={element.link} href={element.link} className="flex gap-2">
              <div
                className={`item flex gap-2 justify-center  self-center   px-8 py-4 border-t-4 ${activeClass}`}
              >
                <i
                  className={`${element.icon} text-xl  dark:text-white  text-emerald-700 `}
                  title="Home"
                ></i>
                <p className="self-center hidden lg:block dark:text-white text-emerald-700 ">
                  {element.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
