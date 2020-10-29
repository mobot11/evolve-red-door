import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Evolve Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Welcome to the home page!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
