import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import clsx from 'clsx';
import styles from '../styles/Error404.module.scss';
import Footer from '../components/Footer/Footer';

const accessibilityStatement = () => {
  return (
    <div className="container">
      <Head>
        <title>Accessibility Statement</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={clsx(['main', styles.main])}>
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
        </div>
        <section>
          <div className={clsx(['section-content', styles.sectionContent])}>
            <h1 className={styles.h1}>Accessibility Statement</h1>
            <p>
              The Red Door Project strives to provide an accessible web presence to all people, regardless of
              disabilities. To support this commitment, The Red Door Project has adopted the W3C's Web Content
              Accessibility Guidelines (WCAG) 2.0 Level A as the enterprise Web Accessibility objective and aims to
              deliver content at higher accessibility levels (Level AA or Level AAA) whenever possible.
            </p>
            <p>
              If you have any trouble accessing information or services on The Red Door Project's site, please contact
              info@reddoorproject.org. Please specify the nature of the accessibility issue and the assistive technology
              you use.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default accessibilityStatement;
