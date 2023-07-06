"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
