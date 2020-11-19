import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import clsx from 'clsx';
import styles from '../styles/Sitemap.module.scss';
import Footer from '../components/Footer/Footer';

import Link from '../components/Link/Link';

const Sitemap = () => {
  return (
    <div className="container">
      <Head>
        <title>Sitemap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Evolve Red Door Sitemap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={clsx(['main', styles.main])} id="main">
        <div className={'section'}>
          <div className={clsx(['section-content', styles.sectionContent])}>
            <h1 className={styles.h1}>Site Map</h1>
            <nav>
              <ul>
                <li>
                  <Link href="/about" text="About" />
                </li>
                <li>
                  <Link href="/accessibility-statement" text="Accessibility Statement" />
                </li>
                <li>
                  <Link href="/donate" text="Donate" />
                </li>
                <li>
                  <Link href="/" text="Home" />
                </li>
                <li>
                  <Link href="/impact" text="Impact" />
                </li>
                <li>
                  <Link href="/keep-in-touch" text="Keep in Touch" />
                </li>
                <li>
                  <Link href="/monologues" text="Monologues" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
