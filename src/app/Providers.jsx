"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import SiteInitialLoader from "@/components/shared/SiteInitialLoader";
import { AuthProvider } from "@/providers/AuthProvider";

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
      })
  );

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <Suspense fallback={<SiteInitialLoader />}>
          {children}
        </Suspense>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}