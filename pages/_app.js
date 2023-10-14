import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import TransactionProvider from "@/providers/transactionProvider";
export default function App({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}
