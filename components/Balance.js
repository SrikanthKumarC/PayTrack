function Balance({ bms }) {
  let INR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="ml-2 mt-4 flex gap-2 self-end align-baseline">
      <p className="dark:text-gray-200 self-end tracking-wide">Balance:</p>
      <h1 className="text-2xl">{INR.format(bms)}</h1>
    </div>
  );
}

export default Balance;
