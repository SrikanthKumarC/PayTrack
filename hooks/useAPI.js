import { useQueryClient, useMutation } from "react-query";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { TransactionContext } from "@/providers/transactionProvider";
import { useContext } from "react";
const useAPI = () => {
  const { setQuery } = useContext(TransactionContext);

  const privateAxios = useAxiosPrivate();
  const queryClient = useQueryClient();

  setQuery(queryClient);
  const deleteMutation = useMutation(
    async (id) => {
      console.log(id);
      try {
        const { data } = await privateAxios.delete("/api/deleteTransaction", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          data: {
            transactionId: id,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    { onSuccess: () => queryClient.invalidateQueries("transactions") }
  );

  const addTransactionMutation = useMutation(
    async (transactionObj) => {
      try {
        const { data } = await privateAxios.post(
          "/api/createTransaction",
          transactionObj
        );
      } catch (e) {
        console.error(e);
      }
    },
    { onSuccess: () => queryClient.invalidateQueries("transactions") }
  );

  const addDebtMutation = useMutation(
    async (debtObj) => {
      try {
        const { data } = await privateAxios.post("/api/createDebt", debtObj);
      } catch (e) {
        console.error(e);
      }
    },
    { onSuccess: () => queryClient.invalidateQueries("debts") }
  );

  const deleteDebtMutation = useMutation(
    async (id) => {
      try {
        const { data } = await privateAxios.post("/api/deleteDebt", {
          debtId: id,
        });
      } catch (e) {
        console.error(e);
      }
    },
    { onSuccess: () => queryClient.invalidateQueries("debts") }
  );

  const hanger = {};

  hanger.addTransaction = addTransactionMutation.mutate;
  hanger.deleteTransaction = deleteMutation.mutate;
  hanger.addDebt = addDebtMutation.mutate;
  hanger.deleteDebt = deleteDebtMutation.mutate;

  return hanger;
};

export default useAPI;
