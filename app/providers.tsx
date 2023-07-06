"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import AuthProvider from "@/context/AuthContext";
import { Provider } from "react-redux";
import ToasterProvider from "@/providers/ToasterProvider";
import ModalProvider from "@/providers/ModalProvider";
import store from "@/store";
import { Session } from "@supabase/supabase-js";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Provider store={store}>
          <AuthProvider>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </AuthProvider>
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
