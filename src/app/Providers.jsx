"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import SiteInitialLoader from "@/components/shared/SiteInitialLoader";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";

export default function Providers({ children }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <CartProvider>
          <Suspense fallback={<SiteInitialLoader />}>{children}</Suspense>
        </CartProvider>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}