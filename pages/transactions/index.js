import { TransactionContext } from "@/providers/transactionProvider";
import Table from "@/components/Table";
import React from "react";
import Menu from "@/components/Menu";
function Transactions() {
  const { results, deleteItem } = React.useContext(TransactionContext);
  return (
    <div>
      <div className="mt-2">
        <Menu />
      </div>

      <div className="wrapper border-t-4 overflow-x-auto border-emerald-900 border-x-stone-200 dark:border-t-emerald-800 border-[1px] dark:border-t-2 dark:border-x-stone-800 gap-6 max-w-xl mx-auto">
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
