import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashwin's list</title>
        <meta name="keywords" content="ashwin list" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Home page data 1</p>
        <p className={styles.text}>Home page data 2</p>
        <Link href="/ashwin">
          <a className={styles.btn}>See Ashwin's listing</a>
        </Link>
      </div>
    </>
  );
}
