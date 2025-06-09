import type { Metadata } from "next";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "Next.js+ヘッドレスCMSで作成したサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "Next.js+ヘッドレスCMSで作成したサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
