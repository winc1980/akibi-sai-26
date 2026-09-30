"use client";

import { createContext, ReactNode, useContext } from "react";

const CachedImageRegistryContext = createContext<Record<string, string> | null>(
  null,
);

export function ClientLayout({
  children,
  registry,
}: {
  children: ReactNode;
  registry: Record<string, string>;
}) {
  return (
    <CachedImageRegistryContext value={registry}>
      {children}
    </CachedImageRegistryContext>
  );
}

export function useCachedImageRegistry() {
  const context = useContext(CachedImageRegistryContext);
  if (!context) throw new Error("CachedImageRegistryContextがありません");
  return context;
}
