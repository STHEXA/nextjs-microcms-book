"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className={styles.nav} id="navigation" aria-hidden={!isOpen}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles.button}
        onClick={toggle}
        aria-controls="navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        ) : (
          <Image
            src="menu.svg"
            alt="メニュー"
            width={24}
            height={24}
            priority
          />
        )}
      </button>
    </div>
  );
}
