"use client";

import Mint from "@/components/mint";
import useMintStore from "@/stores/mint";
import React from "react";

export default function Minter() {
  const { open, setOpen } = useMintStore();

  return (
    <Mint
      onClick={() => {
        setOpen(true);
      }}
    />
  );
}
