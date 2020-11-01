import Head from "next/head";
import styles from "../styles/Home.module.css";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Evolve Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={styles.main} id="main">
        <h1>Welcome to the home page!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
