"use client";

import React, { useEffect } from "react";
import { format, getMonth, parseISO, set } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
// Context
export const TransactionContext = React.createContext({});
function TransactionProvider({ children }) {
  const [query, setQuery] = useState(null);

  const privateAxios = useAxiosPrivate();
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: "transactionsStore",
    queryFn: async () => {
      const { data } = await privateAxios.get("/api/transactions");
      setStoreList(data);
      return data;
    },
    enabled: false,
    retry: false,
  });

  const [storeList, setStoreList] = useState([]);
  const [filteredResults, setFilteredResults] = React.useState({});
  const [filterInput, setFilterInput] = React.useState("");

  function filterByMonth(date) {
    const storeByMonth = storeList.filter((store) => {
      return getMonth(parseISO(store.when)) === getMonth(parseISO(date));
    });
    setFilteredResults(storeByMonth);
    console.log(storeByMonth, "broo");
  }

  // console.log(balance);
  return (
    <TransactionContext.Provider
      value={{
        filteredResults,
        setFilteredResults,
        filterByMonth,
        filterInput,
        setFilterInput,
        setQuery,
        query,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
