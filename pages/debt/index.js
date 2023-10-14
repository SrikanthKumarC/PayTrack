import Menu from "@/components/Menu";
import Input from "@/components/low-level-components/Input";
import React from "react";
import ShortUniqueId from "short-unique-id";
function Debt() {
  const [formState, setFormState] = React.useState({});
  const [debtState, setDebtState] = React.useState([]);
  function deleteItem(id) {
    const updatedStore = debtState.filter((list) => {
      return list.id !== id;
    });
    setDebtState(updatedStore);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const uid = new ShortUniqueId({ length: 10 });
    setDebtState([...debtState, { ...formState, id: uid }]);
  }
  let INR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="dark:text-white bg-white dark:bg-transparent   m-2 mt-6 relative border-[2px] dark:border-[hsl(210,23%,20%)] max-w-xl mx-auto  border-stone-200 rounded-lg  p-6 gap-4"
      >
        <h1 className="text-2xl text-center">Debt/Loan Records</h1>
        <div className="flex gap-2 flex-col">
          <Input
            type="text"
            label={"Name"}
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            placeholder="Citi Bank Loan"
          />

          <Input
            type="number"
            label={"Amount"}
            required
            value={formState.amount}
            placeholder="21000"
            onChange={(e) =>
              setFormState({ ...formState, amount: e.target.value })
            }
          />

          <Input
            type="number"
            label={"Interest"}
            required
            value={formState.interest}
            placeholder="6"
            onChange={(e) =>
              setFormState({ ...formState, interest: e.target.value })
            }
          />
          <Input
            type="number"
            label={"Period"}
            required
            value={formState.period}
            placeholder="in months. Ex: 2"
            onChange={(e) =>
              setFormState({ ...formState, period: e.target.value })
            }
          />
        </div>

        <button className="hover:outline-dashed outline-1 bg-emerald-300 dark:hover:text-white transition-all hover:border-emerald-700 rounded-sm tracking-wide dark:bg-emerald-900 text-black border-emerald-600 border-2   dark:text-white px-8 py-2 mt-6">
          Add Details
        </button>
      </form>

      {!!debtState.length && (
        <table className=" max-w-xl  mx-auto w-full transition-all overflow-x-hidden overscroll-x-contain  text-center ">
          <thead className="uppercase    py-2 border-b-[1px]  dark:bg-emerald-900  border-emerald-600 dark:border-emerald-800 bg-emerald-100 dark:text-white">
            <tr className="py-2">
              <th className=" py-3 px-2 text-right">#</th>
              <th>Debt</th>
              <th>Interest</th>
              <th>Months</th>
              <th className="py-4 text-right">Amount</th>
              <th className="py-4 px-8 "></th>
            </tr>
          </thead>
          <tbody>
            {debtState.map((list, idx) => {
              if (!list) return;
              return (
                <tr
                  key={list.id}
                  className="border-b-[2px] dark:border-x-2 dark:border-x-slate-600 dark:border-y-slate-600 border-y-stone-900"
                >
                  <td className="py-4 text-right">{idx + 1}</td>
                  <td className="py-4 ">{list.name}</td>
                  <td className="py-4">{list.interest}</td>
                  <td className="py-4">{list.period}</td>
                  <td className="py-4 text-right">{INR.format(list.amount)}</td>
                  <td onClick={() => deleteItem(list.id)} className="py-4 px-8">
                    <i className="ri-delete-bin-2-line text-xl hover:text-red-500 cursor-pointer font-thin"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Menu />
    </>
  );
}

export default Debt;
