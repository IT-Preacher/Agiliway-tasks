import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.conteiner_page_title}>
          <span className={styles.page_title}>Let the stepper begin</span>
        </div>
        <Link href="/reg-form/" passHref>
          <button className={styles.button}>
            <span className={styles.secondSpan}>
              <span className={styles.firstSpan}>
                <a>Start</a>
              </span>
            </span>
          </button>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
