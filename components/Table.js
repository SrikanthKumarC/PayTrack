function Table({ children, values, deleteItem }) {
  // <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
  //   <Column field="code" header="Code"></Column>
  //   <Column field="name" header="Name"></Column>
  //   <Column field="category" header="Category"></Column>
  //   <Column field="quantity" header="Quantity"></Column>
  // </DataTable>;
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
          <p className="dark:text-gray-200 mt-2">
            Either add some transactions or remove filters if applied
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <table className="w-full transition-all overflow-x-hidden overscroll-x-contain  text-center ">
        <thead className="uppercase   py-2 border-b-[1px]  dark:bg-emerald-900  border-emerald-600 dark:border-emerald-800 bg-emerald-100 dark:text-white">
          <tr className="py-2">{children}</tr>
        </thead>
        <tbody>
          {values.map((list, idx) => {
            return (
              <tr key={list.id} className="border-b-[2px] border-y-stone-900">
                <td className="py-4 text-right">{idx + 1}</td>
                <td className="py-4 ">{list.transaction}</td>
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
