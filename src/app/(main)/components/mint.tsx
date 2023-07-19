"use client";

import React, { useEffect } from "react";
import { TransactionBlock } from "@mysten/sui.js";
import { useWalletKit } from "@mysten/wallet-kit";

export default function Mint() {
  const packageObjectId =
    "0xdcb5802353ed074daae5aedd7e13a4c887da8d0647317ac534102f812f6cd0d5";
  const module = "memory";
  const func = "mint";
  const suiObjectId =
    "0x89d927e403122bf9242608e9a297abac10356de9eb9deb392416819837960a45";

  const walletKit = useWalletKit();

  useEffect(() => {
    if (walletKit && walletKit.isConnected) {
      const tx = new TransactionBlock();

      /*tx.setGasPayment([
        {
          objectId: suiObjectId,
          version: "40",
          digest: "ooZPZQQ35EKBGDhHblCUHiCtjR4DEjPVWdByYD0zvwY",
        },
      ]);*/

      tx.moveCall({
        target: `${packageObjectId}::${module}::${func}`,
        arguments: [
          tx.object(
            "0x3024ec8beb1fd6c88ff942364d2dde4b466a1d928d622036fecef617c65e2b34"
          ),
          tx.pure(2000),
          tx.pure(11),
          tx.pure(28),
          tx.pure("https://avatars.githubusercontent.com/u/68217439?s=48&v=4"),
          tx.pure("My Birthday :)"),
          tx.object(suiObjectId),
        ],
      });

      walletKit
        .signAndExecuteTransactionBlock({
          transactionBlock: tx,
        })
        .then(console.log)
        .catch(console.log);
    }
  }, [walletKit]);

  return <div></div>;
}
