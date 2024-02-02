import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>RoleFinder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>RoleFinder</div>
            <Link className={"button"} href="/upload">
              Enter
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
