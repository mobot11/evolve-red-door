import Link from 'next/link';

import Head from 'next/head';
import Nav from '../components/Nav';
import clsx from 'clsx';
import styles from '../styles/Error404.module.scss';
import Footer from '../components/Footer/Footer';

const error404 = () => {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | Page Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={clsx(['main', styles.main])}>
        <section className={styles.sectionError}>
          <div className={clsx(['section-content', styles.sectionContent])}>
            <h1 className={styles.h1}>Page not found</h1>
            <p>Sorry, we couldn't find the page you are looking for.</p>
            <Link href="/">
              <a>Go to The Evolve Experience homepage</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default error404;
