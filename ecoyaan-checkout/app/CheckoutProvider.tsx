"use client";

import React, { createContext, useContext, useState } from "react";

export type CartItem = {
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  image: string;
};

export type Address = {
  fullName: string;
  email: string;
  phone: string;
  pinCode: string;
  city: string;
  state: string;
};

type CheckoutContextValue = {
  address: Address | null;
  setAddress: (addr: Address) => void;
};

const CheckoutContext = createContext<CheckoutContextValue | undefined>(
  undefined,
);

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return ctx;
}

export function CheckoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [address, setAddress] = useState<Address | null>(null);

  return (
    <CheckoutContext.Provider value={{ address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

