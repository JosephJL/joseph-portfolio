import Navbar from "~/components/Navbar";
import styles from "./RootLayout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#0b1a61]">
        <Navbar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
