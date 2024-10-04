"use client";
"use client";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import TransactionProvider from "@/providers/transactionProvider";
import AuthProvider from "@/providers/authProvider";
import LoadingProvider, { LoadingContext } from "@/providers/loadingProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import Script from "next/script";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script data-domain="paytrack.srikanth.ch" src="https://stats.srikanth.ch/js/script.js"/>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <TransactionProvider>
            <Component {...pageProps} />
          </TransactionProvider>
        </LoadingProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </AuthProvider>
    </>
  );
}
