import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import clsx from 'clsx';
import styles from '../styles/Sitemap.module.scss';
import Footer from '../components/Footer/Footer';

const links = [
  {
    url: '/about',
    label: 'About Us',
    id: 'about',
  },
  {
    url: '/accessibility-statement',
    label: 'Accessibility Statement',
    id: 'accessibility-statement',
  },
  {
    url: '/donate',
    label: 'Donate',
    id: 'donate',
  },
  {
    url: '/',
    label: 'The Evolve Experience (Home)',
    id: 'home',
  },
  {
    url: '/impact',
    label: 'Impact',
    id: 'impact',
  },
  {
    url: '/keep-in-touch',
    label: 'Keep In Touch',
    id: 'keep-in-touch',
  },
  {
    url: '/monologues',
    label: 'The Monologues',
    id: 'monologues',
  },
];

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
            <div className="links">
              <ul className={styles['links']}>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
