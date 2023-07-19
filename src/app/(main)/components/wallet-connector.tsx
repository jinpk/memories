"use client";

import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import styles from "./wallet.module.css";
import { formatAddress } from "@mysten/sui.js";

export default function WalletConnector() {
  const wallet = useWalletKit();

  return (
    <ConnectButton
      className={styles.wallet}
      connectText="Connect Wallet"
      connectedText={`(${formatAddress(wallet.currentAccount?.address || "")}`}
    />
  );
}
