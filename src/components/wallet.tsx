import React, { MouseEventHandler, useEffect } from "react";

export default function Wallet({
  connected,
  name,
  address,
  onClick,
}: {
  connected: boolean;
  name: string;
  address: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick}>
      {connected ? `(${name}) ${address}` : "Connected wallet"}
    </button>
  );
}
