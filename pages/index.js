import Logo from "@/components/Logo";
import Input from "@/components/low-level-components/Input";
import React from "react";
export default function Home() {
  const [visibile, setVisible] = React.useState(true);
  return (
    <main className="mx-auto mt-2 ">
      <Logo />
      {
        <form
          action=""
          className=" m-2 mt-6 relative border-[1px] dark:border-slate-700 border-gray-300 rounded-lg max-w-xl mx-auto p-6 gap-4"
        >
          <h1 className="text-md mb-3 font-bold tracking-wider uppercase ">
            add Your Monthly Earnigns
          </h1>
          <div className="flex self-center -mt-3 gap-[2px] py-2 ">
            <p className=" block text-gray-400 mr-2">For </p>
            <input
              type="month"
              defaultValue="2023-10"
              className="fit-content hover:outline-dashed dark:bg-slate-800 dark:border-0  rounded-sm px-2 border-[1px] border-slate-300 focus:outline-dashed "
            />
          </div>

          <div className="flex gap-4">
            <Input type="number" label="Income" placeholder="30,200" />
            <Input type="number" label="Expense" placeholder="10,200" />
          </div>
          <button
            onClick={() => setVisible(false)}
            type="button"
            className="hover:outline-dashed tracking-wide bg-p2  text-white px-4 py-2 sm:p-4 mt-6"
          >
            Add Details
          </button>
        </form>
      }
    </main>
  );
}
