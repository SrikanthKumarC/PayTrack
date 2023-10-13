"use client";

import Logo from "@/components/Logo";
import Input from "@/components/low-level-components/Input";
import React from "react";
import { format, getMonth, parseISO } from "date-fns";
import ShortUniqueId from "short-unique-id";
import Table from "@/components/Table";
import Balance from "@/components/Balance";
import Menu from "@/components/Menu";

export default function Home() {
  const [formState, setFormState] = React.useState({
    transactionDate: format(new Date(), "yyyy-M-dd"),
  });
  const [storeList, setStoreList] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState({});
  const filterRef = React.useRef();
  const uid = new ShortUniqueId({ length: 10 });
  const [filterInput, setFilterInput] = React.useState("");
  let balance = storeList.reduce((acc, currVal) => acc + +currVal.amount, 0);

  function validateInput() {
    if (!formState.transactionDate) return false;
    if (!formState.amount) return false;
    return formState.transaction;
  }

  function deleteItem(id) {
    const updatedStore = storeList.filter((list) => {
      return list.id !== id;
    });
    setStoreList(updatedStore);
  }
  console.log(filteredResults);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateInput()) return;
    const newList = storeList;
    newList.push({ ...formState, id: uid.rnd() });
    const emptyState = {
      id: "",
      amount: "",
      transaction: "",
      transactionDate: "",
    };
    setFormState(emptyState);
    setStoreList(newList);
  }

  function filterByMonth(date) {
    const storeByMonth = storeList.filter((store) => {
      return (
        getMonth(parseISO(store.transactionDate)) === getMonth(parseISO(date))
      );
    });
    setFilteredResults(storeByMonth);
  }

  const results = filterInput.length > 0 ? filteredResults : storeList;

  return (
      <>
        <Menu />
    <main className="mx-auto mt-2 max-w-xl">
      <Logo />
      <Balance bms={balance} />
      {
        <form
          onSubmit={handleSubmit}
          action=""
          className="dark:text-white bg-white dark:bg-transparent   m-2 mt-6 relative border-[2px] dark:border-[hsl(210,23%,20%)]  border-stone-200 rounded-lg  p-6 gap-4"
        >
          <h1 className="text-xl sm:text-2xl  text-center mb-4 font-light capitalize ">
            start adding your transactions
          </h1>
          <div className="flex flex-col mb-2 self-center -mt-3 py-2 ">
            <Input
              required
              type="date"
              label="When (defaults to today)"
              value={formState.transactionDate}
              onChange={(e) =>
                setFormState({ ...formState, transactionDate: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              label="What"
              placeholder="Sunny's Birthday"
              value={formState.transaction}
              onChange={(e) =>
                setFormState({ ...formState, transaction: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Input
              type="number"
              required
              label="Amount: use (-) for expense"
              placeholder="30,200"
              onChange={(e) =>
                setFormState({ ...formState, amount: e.target.value })
              }
              value={formState.amount}
            />
            
          </div>
          <button
            type="submit"
            className="hover:outline-dashed outline-1 bg-emerald-300 dark:hover:text-white transition-all hover:border-emerald-700 rounded-sm tracking-wide dark:bg-emerald-900 text-black border-emerald-600 border-2   dark:text-white px-8 py-2 mt-6"
          >
            Add Details
          </button>
        </form>
      }
      {
        <div className="filter flex mx-auto max-w-xl justify-between mt-8 mb-4">
          <div className="left flex items-center">
            <p className="mr-3 items-end    ">Filter by: </p>
            <input
              className="rounded-sm dark:bg-transparent dark:isDarkInput hover:dark:bg-emerald-900 dark:border-slate-600 py-2 selection:bg-red-100 dark:active:bg-emerald-950 px-2 border focus:outline-emerald-300 hover:bg-emerald-50 shadow-inner"
              ref={filterRef}
              value={filterInput}
              onChange={(e) => {
                setFilterInput(e.target.value);
                filterByMonth(e.target.value);
              }}
              type="month"
            />
          </div>

          {filterInput.length > 0 && (
            <button
              className="border hover:bg-emerald-50 shadow-inner  rounded-sm px-4 dark:border-slate-600 "
              onClick={() => {
                setFilterInput("");
                setFilteredResults({});
              }}
            >
              <i className="ri-filter-off-line mr-2"></i>Clear Filters
            </button>
          )}
        </div>
      }

      <>
        <div className="wrapper border-t-4 overflow-x-auto border-emerald-900 border-x-stone-200 dark:border-t-emerald-800 border-[1px] dark:border-t-2 dark:border-x-stone-800 gap-6 max-w-xl mx-auto">
          <Table values={results} deleteItem={deleteItem}>
            <th className=" py-3 px-2 text-right">#</th>
            <th>Transaction</th>
            <th className="py-4 text-right">Amount</th>
            <th className="py-4 px-8 ">date</th>
            <th className="py-4 px-8 "></th>
          </Table>
        </div>
      </>
    </main>
      </>

  );
}
