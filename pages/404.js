import Link from 'next/link';

import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import clsx from 'clsx';
import styles from '../styles/Error404.module.scss';
import Footer from '../components/Footer/Footer';

const error404 = () => {
  return (
    <div className="container">
      <Head>
        <title>Page Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="404 error. Page not found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={clsx(['main', styles.main])} id="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
        </div>
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
