import Head from 'next/head';
import Nav from '../components/Nav';
import Link from '../components/Link/Link';
import Footer from '../components/Footer/Footer';
import clsx from 'clsx';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
          <div className={clsx(['banner', styles.banner])}>
            <img src="/assets/evolve_logo.png" alt="The Evolve Experience logo" />
            <div className={styles.quote}>
              <q>
                The most meaningful presentation I have ever seen on race, power imbalances, and the exercise of
                authority.
              </q>
              <span>Circuit Court Judge, State of Oregon</span>
            </div>
          </div>
        </div>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}
