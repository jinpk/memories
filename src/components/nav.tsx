import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav({
  routes,
  contentComponent,
}: {
  routes: { label: string; path: string }[];
  contentComponent: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          {routes.map((x, i) => {
            return (
              <li key={i}>
                <Link href={x.path}>{x.label}</Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.content}>{contentComponent}</div>
      </nav>
    </div>
  );
}
