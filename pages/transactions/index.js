import { TransactionContext } from "@/providers/transactionProvider";
import Table from "@/components/Table";
import React from "react";
import Menu from "@/components/Menu";
function Transactions() {
  const {
    results,
    deleteItem,
    filterInput,
    setFilterInput,
    filterByMonth,
    setFilteredResults,
  } = React.useContext(TransactionContext);

  return (
    <div>
      <div className="">
        <Menu />
      </div>
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

        {filterInput.length > 0 && (
          <button
            className="border mt-2 w-full sm:w-fit hover:bg-emerald-50 shadow-inner  rounded-sm px-4 dark:border-slate-600 "
            onClick={() => {
              setFilterInput("");
              setFilteredResults({});
            }}
          >
            <i className="ri-filter-off-line mr-2"></i>Clear Filters
          </button>
        )}
      </div>
      <div className="wrapper border-t-4 overflow-x-auto mb-8 border-emerald-900 border-x-stone-200 dark:border-t-emerald-800 border-[1px] dark:border-t-2 dark:border-x-stone-800 gap-6 max-w-xl mx-auto">
        <Table values={results} deleteItem={deleteItem} limited={false}>
          <th className=" py-3 px-2 text-right">#</th>
          <th>Transaction</th>
          <th className="py-4 text-right">Amount</th>
          <th className="py-4 px-8 ">date</th>
          <th className="py-4 px-8 "></th>
        </Table>
      </div>
    </div>
  );
}

export default Transactions;
