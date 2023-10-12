"use client";

import Logo from "@/components/Logo";
import Input from "@/components/low-level-components/Input";
import React from "react";
import {format} from 'date-fns';
import ShortUniqueId from "short-unique-id";
export default function Home() {
  const [formState, setFormState] = React.useState({ transactionDate: format(new Date(), 'yyyy-M-dd') });
  const [storeList, setStoreList] = React.useState([]);
  const uid = new ShortUniqueId({ length: 10 });


  function validateInput() {
    if (!formState.transactionDate) return false;
    if (!formState.amount) return false;
    return formState.transaction;
  }

  console.log(formState);
  function handleSubmit(e) {
    e.preventDefault()
    if (!validateInput()) return;
    const newList = storeList;
    newList.push({ ...formState, id: uid.rnd() });
    const emptyState = {id: '', amount: '', transaction: '', date: ''}
    setFormState(emptyState);
    setStoreList(newList);
  }

  console.log(storeList)

  let INR = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "INR"
  })
  return (
    <main className="mx-auto mt-2 ">
      <Logo />
      {
        <form
            onSubmit={handleSubmit}
          action=""
          className="dark:text-white bg-white dark:bg-transparent   m-2 mt-6 relative border-[2px] dark:border-[hsl(210,23%,20%)]  border-stone-200 rounded-lg max-w-xl mx-auto p-6 gap-4"
        >
          <h1 className="text-xl sm:text-2xl  text-center mb-8 font-light capitalize ">
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
          <div className='mb-2'>
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
              type='submit'
            className="hover:outline-dashed rounded-sm tracking-wide bg-emerald-900   text-white px-4 py-2 sm:p-2 mt-6"
          >
            Add Details
          </button>
        </form>
      }
      {storeList.length > 0 && (
        <div className="wrapper border-t-4 overflow-x-auto mt-8 border-emerald-900 border-x-stone-200 dark:border-t-emerald-800 border-[1px] dark:border-t-2 dark:border-x-stone-800 gap-6 max-w-xl mx-auto">
          <table className="w-full  overflow-x-hidden overscroll-x-contain  text-center ">
            <thead className="uppercase   py-2 border-b-[1px]  dark:bg-emerald-950  border-emerald-600 dark:border-emerald-800 bg-emerald-500 dark:text-white">
              <tr className="py-2">
                <th className=" py-3 px-2 text-right">#</th>
                <th>Transaction</th>
                <th className="py-4 text-right">Amount</th>
                <th className="py-4 px-8 text-right">Category</th>
              </tr>
            </thead>
            <tbody>
              {storeList.map((list, idx) => {
                return (
                  <tr key={list.id} className="border-b-[2px] border-y-stone-900">
                    <td className="py-4 text-right">{idx + 1}</td>
                    <td className="py-4 ">{list.transaction}</td>
                    <td className="py-4 text-right">{INR.format(list.amount)}</td>
                    <td className="py-4 px-8 text-right">{list.transactionDate}</td>
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
