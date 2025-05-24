// src/components/Providers.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./ui/tooltip";
import { LanguageProvider } from "../contexts/LanguageContext";
import Toaster from "./ui/toaster";
import Sonner from "./ui/sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const queryClient = new QueryClient();

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
