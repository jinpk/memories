import {
  JsonRpcProvider,
  devnetConnection,
  Ed25519Keypair,
  RawSigner,
  TransactionBlock,
} from "@mysten/sui.js";

const keypair = new Ed25519Keypair();
const suiProvider = new JsonRpcProvider(devnetConnection);

export const suiSigner = new RawSigner(keypair, suiProvider);
