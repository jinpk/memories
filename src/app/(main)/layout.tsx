import { ReactNode } from "react";
import styles from "./layout.module.css";
import Nav from "@/components/nav";
import WalletProvider from "./providers/wallet";
import Minter from "./components/minter";
import WalletConnector from "./components/wallet-connector";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <WalletProvider>
      <div className={styles.container}>
        <Nav
          routes={[
            { label: "Discover", path: "/discover" },
            { label: "Profile", path: "/profile" },
          ]}
          contentComponent={
            <>
              <Minter />
              <WalletConnector />
            </>
          }
        />
        <main className={styles.content}>{children}</main>
      </div>
    </WalletProvider>
  );
}
