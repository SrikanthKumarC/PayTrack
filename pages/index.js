"use client";

import Logo from "@/components/Logo";
import Input from "@/components/low-level-components/Input";
import React from "react";

export default function Home() {
  const [visibile, setVisible] = React.useState(true);

  const [formState, setFormState] = React.useState({ dateMonth: "2023-10" });
  const [storeList, setStoreList] = React.useState([]);

  console.log(formState);
  function handleSubmit() {
    const newList = storeList;
    newList.push({ ...formState, id: crypto.randomUUID });
    setFormState({});
    setStoreList(newList);
  }
  return (
    <main className="mx-auto mt-2 ">
      <Logo />
      {
        <form
          action=""
          className="dark:text-white bg-[#fff] dark:bg-p_foreground   m-2 mt-6 relative border-[1px] dark:border-[hsl(210,23%,10%)]  border-gray-400 rounded-lg max-w-xl mx-auto p-6 gap-4"
        >
          <h1 className="text-xl sm:text-2xl  text-center mb-8 font-light  tracking-wider capitalize ">
            add Your Monthly Earnigns
          </h1>
          <div className="flex flex-col mb-4 self-center -mt-3 py-2 ">
            <Input
              type="month"
              label="for the Month"
              value={formState.dateMonth}
              onChange={(e) =>
                setFormState({ ...formState, dateMonth: e.target.value })
              }
            />
          </div>

          <div className="flex gap-4">
            <Input
              type="number"
              label="Income"
              placeholder="30,200"
              onChange={(e) =>
                setFormState({ ...formState, income: e.target.value })
              }
              value={formState.income}
            />
            <Input
              type="number"
              label="Expense"
              placeholder="10,200"
              value={formState.expense}
              onChange={(e) =>
                setFormState({ ...formState, expense: e.target.value })
              }
            />
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="hover:outline-dashed rounded-sm tracking-wide bg-p1   text-white px-4 py-2 sm:p-2 mt-6"
          >
            Add Details
          </button>
        </form>
      }
      {storeList.length > 0 && (
        <div className="wrapper border-[2px] overflow-x-auto   border-p_foreground rounded-lg gap-6 max-w-xl mx-auto">
          <table className="w-full  overflow-x-hidden overscroll-x-contain  text-center ">
            <thead className="uppercase  tracking-wider py-2 border-b-2 border-p1 bg-p_foreground dark:text-white">
              <tr className="py-2 font-bold ">
                <th className=" py-3 px-2 text-right">#</th>
                <th>Transaction</th>
                <th className="py-4 text-right">Amount</th>
                <th className="py-4 px-8 text-right">Category</th>
              </tr>
            </thead>
            <tbody>
              {storeList.map((list, idx) => {
                return (
                  <tr key={list.id} className="">
                    <td className="py-4 text-right">{idx + 1}</td>
                    <td className="py-4 ">{list.income}</td>
                    <td className="py-4 text-right">{list.expense}</td>
                    <td className="py-4 px-8 text-right">{list.dateMonth}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
