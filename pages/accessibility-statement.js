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
        <meta
          name="description"
          content="The Red Door Project Accessibility Statement. The Red Door Project is committed to providing a web experience that meets the needs of as many visitors as possible."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className={clsx(['main', styles.main])} id="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
        </div>
        <section>
          <div className={clsx(['section-content', styles.sectionContent])}>
            <h1 className={styles.h1}>Accessibility Statement</h1>
            <p>
              The Red Door Project is committed to providing a web experience that meets the needs of as many visitors
              as possible. We’re continually working to improve the accessibility and usability of our site, so that all
              users have an excellent experience.
            </p>
            <p>
              Our on-going accessibility effort works towards conforming to the Web Content Accessibility Guidelines
              (WCAG) version 2.1, level AA criteria. These guidelines not only help make web content accessible to users
              with sensory, cognitive and mobility disabilities, but ultimately to all users, regardless of ability.
            </p>
            <p>
              If you have any trouble accessing information or services on The Red Door Project's site,{' '}
              <a href="mailto:info@reddoorproject.org">please contact info@reddoorproject.org</a>. Please specify the
              nature of the accessibility issue and the assistive technology you use.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default accessibilityStatement;
