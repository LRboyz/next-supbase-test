"use client";

import { Navbar } from "./Navbar";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex-1 bg-background/20 ml-[240px] min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
