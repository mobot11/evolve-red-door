import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Evolve Experience</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={styles.main} id="main">
        <h1>Welcome to the home page!</h1>
      </main>

      <Footer />
    </div>
  );
}
