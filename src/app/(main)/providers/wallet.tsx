"use client";

import { WalletKitProvider } from "@mysten/wallet-kit";
import React, { ReactNode } from "react";

export default function WalletProvider({ children }: { children: ReactNode }) {
  return <WalletKitProvider>{children}</WalletKitProvider>;
}
