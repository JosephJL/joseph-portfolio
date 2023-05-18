import styles from "./ImageCard.module.css";

export default function ImageCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.main}>{children}</main>;
}
