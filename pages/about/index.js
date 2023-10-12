import React from "react";

const Page = () => {
  return (
    <div className="px-6 py-4 dark:text-stone-300">
      <h1 className="block mb-4 text-2xl">Design System</h1>

      <h2 className="max-w-[34ch] mb-4">
        Designed and Implemented using Next.js, TailwindCSS, Node.js, Express.js
        and MySQL.
      </h2>

      <p className="tracking-wide text-lg font mb-2">Brand Colors</p>
      <p className="mb-[1px]">Emerald </p>
      <div className="flex flex-wrap gap-4 ">
        <div className="color md:mb-0">
          <div className="bg-emerald-50 w-[50px] border-[1px] h-[50px]"></div>
          <p>50</p>
        </div>
        <div className="color">
          <div className="bg-emerald-100 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">100</p>
        </div>
        <div className="color">
          <div className="bg-emerald-200 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">200</p>
        </div>

        <div className="color">
          <div className="bg-emerald-500 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">500</p>
        </div>
        <div className="color ">
          <div className="bg-emerald-600 w-[50px] border-[1px]   h-[50px]"></div>
          <p className="">600</p>
        </div>
        <div className="color">
          <div className="bg-emerald-700 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">700</p>
        </div>
        <div className="color">
          <div className="bg-emerald-800 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">800</p>
        </div>
        <div className="color">
          <div className="bg-emerald-900 w-[50px] border-[1px]  h-[50px]"></div>
          <p className="">900</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
