import React, { MouseEventHandler } from "react";

export default function Mint({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={onClick}>Mint your memory</button>;
}
