import Logo from "@/components/Logo";
import Input from "@/components/low-level-components/Input";
import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import Table from "@/components/Table";
import Balance from "@/components/Balance";
import Menu from "@/components/Menu";
import useAPI from "@/hooks/useAPI";
import { TransactionContext } from "@/providers/transactionProvider";
import { useQuery } from "react-query";
import Head from "next/head";
export default function Home() {
  const hanger = useAPI();
  const privateAxios = useAxiosPrivate();

  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: "transactions",
    queryFn: async () => {
      const { data } = await privateAxios.get("/api/transactions");
      return data;
    },
    retry: false,
  });
  const {
    filterInput,
    setFilterInput,
    filterByMonth,
    filteredResults,
    setFilteredResults,
  } = React.useContext(TransactionContext);
  const [formState, setFormState] = useState({ amount: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      transaction: transactionName,
      amount: transactionAmount,
      transactionDate,
    } = formState;
    const transactionObj = {
      transactionName,
      transactionAmount,
      transactionDate,
    };
    hanger.addTransaction(transactionObj);
    setFormState({ amount: 0, transaction: "", transactionDate: "" });
  };

  let balance = results?.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const whatToShow = filterInput.length > 0 ? filteredResults : results;
  return (
    <>
      <Head>
        <title>Track Your Expenses</title>
        <meta
          name="Paytrack"
          content="Track your expenses and incomes"
          key="desc"
        />
      </Head>
      <Menu />
      <main className="mx-auto mt-2 max-w-xl">
        <Logo />
        {isLoading ? <p>loading...</p> : <Balance balance={balance} />}

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
                setFormState({
                  ...formState,
                  transactionDate: e.target.value,
                })
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

        <div className="filter flex sm:flex-nowrap flex-wrap mx-auto max-w-xl justify-between mt-8 mb-4">
          <div className="left flex  items-center">
            <p className="mr-3 items-end    ">Filter by: </p>
            <input
              className="rounded-sm dark:bg-transparent dark:isDarkInput hover:dark:bg-emerald-900 dark:border-slate-600 py-2 selection:bg-red-100 dark:active:bg-emerald-950 px-2 border focus:outline-emerald-300 hover:bg-emerald-50 shadow-inner"
              value={filterInput}
              onChange={(e) => {
                setFilterInput(e.target.value);
                filterByMonth(e.target.value);
              }}
              type="month"
            />
          </div>

          {filterInput?.length > 0 && (
            <button
              className="border py-2 mt-2 w-full sm:w-fit hover:bg-emerald-50 shadow-inner  rounded-sm px-4 dark:border-slate-600 "
              onClick={() => {
                setFilterInput("");
                setFilteredResults({});
              }}
            >
              <i className="ri-filter-off-line mr-2"></i>Clear Filters
            </button>
          )}
        </div>
        <p className="text-gray-400"> Showing only last 10 transactions</p>
        <div className="wrapper border-t-4 overflow-x-auto border-emerald-900 border-x-stone-200 dark:border-t-emerald-800 border-[1px] dark:border-t-2 dark:border-x-stone-800 gap-6 max-w-xl mx-auto">
          <Table values={whatToShow} deleteItem={hanger.deleteTransaction}>
            <th className=" py-3 px-2 text-right">#</th>
            <th>Transaction</th>
            <th className="py-4 text-right">Amount</th>
            <th className="py-4 px-8 ">date</th>
            <th className="py-4 px-8 "></th>
          </Table>
        </div>
      </main>
      <Toaster richColors />
    </>
  );
}
