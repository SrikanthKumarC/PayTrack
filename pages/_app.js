'use client';
'use client'
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import TransactionProvider from "@/providers/transactionProvider";
import AuthProvider from "@/providers/authProvider";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export const runtime = 'edge';
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TransactionProvider>
          <Component {...pageProps} />
        </TransactionProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </AuthProvider>
  );
}
