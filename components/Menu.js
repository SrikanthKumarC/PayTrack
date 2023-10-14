import React from "react";

const Menu = () => {
  return (
    <div className="hidden md:block float-left -mx-4 py-2 -my-6 h-full fixed  border-r dark:border-gray-800">
      <div className="item flex gap-2 justify-center bg-emerald-100 self-center dark:bg-emerald-800   px-6 py-2 border-r-4 border-r-emerald-700">
        <i
          className="ri-home-4-line text-xl  dark:text-white font-bold text-emerald-700 "
          title="Home"
        ></i>
        <p className="self-center hidden lg:block dark:text-white text-emerald-700 font-bold">
          Home
        </p>
      </div>
      <div className="item flex gap-2  self-center px-6 py-2 ">
        <i class="ri-copper-coin-line text-xl   "></i>
        <p className="self-center hidden lg:block ">Transactions</p>
      </div>
    </div>
  );
};

export default Menu;
