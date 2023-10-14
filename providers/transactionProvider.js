import React from "react";
import { format, getMonth, parseISO } from "date-fns";
import ShortUniqueId from "short-unique-id";

// Context
export const TransactionContext = React.createContext({});

function TransactionProvider({ children }) {
  const [formState, setFormState] = React.useState({
    transactionDate: format(new Date(), "yyyy-M-dd"),
  });
  const [storeList, setStoreList] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState({});

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
    <TransactionContext.Provider
      value={{
        balance,
        results,
        filterByMonth,
        formState,
        handleSubmit,
        setFormState,
        setFilteredResults,
        deleteItem,
        setFilterInput,
        filterInput
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
