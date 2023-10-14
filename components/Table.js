function Table({
  children,
  values,
  deleteItem,
  limited = true,
}) {
  let INR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  if (!values.length) {
    return (
      <div className="py-4">
        <h2
          className="text-center bg-yellow-100 text-yellow-80
         dark:bg-transparent dark:text-yellow-300"
        >
          <i className="ri-information-line mr-2 dark:text-yellow-300"></i>
          Empty Results
        </h2>
        <div className="flex justify-center">
          <p className="dark:text-gray-200 mt-2 px-4">
            Either add some transactions or remove filters if applied
          </p>
        </div>
      </div>
    );
  }
  let newValues = values;
  if (limited) {
    newValues = values.map((val, idx) => {
      if (idx < 10) return val;
    });
  }
  return (
    <>
      <table className="w-full transition-all overflow-x-hidden overscroll-x-contain  text-center ">
        <thead className="uppercase   py-2 border-b-[1px]  dark:bg-emerald-900  border-emerald-600 dark:border-emerald-800 bg-emerald-100 dark:text-white">
          <tr className="py-2">{children}</tr>
        </thead>
        <tbody>
          {newValues.map((list, idx) => {
            if (!list) return;
            return (
              <tr key={list.id} className="border-b-[2px] border-y-stone-900">
                <td className="py-4 text-right">{idx + 1}</td>
                <td className="py-4 ">
                  {list.transaction}
                </td>
                <td className="py-4 text-right">{INR.format(list.amount)}</td>
                <td className="py-4 px-8 ">{list.transactionDate}</td>
                <td onClick={() => deleteItem(list.id)} className="py-4 px-8">
                  <i className="ri-delete-bin-2-line text-xl hover:text-red-500 cursor-pointer font-thin"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
