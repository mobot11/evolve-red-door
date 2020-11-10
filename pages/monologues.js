import Head from 'next/head';
import Link from '../components/Link/Link';
import clsx from 'clsx';
import styles from '../styles/Monologues.module.scss';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/PageHeader';

const Monologues = () => {
  return (
    <div className="container">
      <Head>
        <title>The Monologues</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.img])}></div>
        </div>

        <section className={styles.sectionGem}>
          <div className={styles.column}>
            <div className={styles.contentWrapperBig}>
              <div className={styles.copoutLogo}></div>
              <div className={styles.monologueHeader}>
                <div className={clsx(['section-content', styles.narrowContent, styles.contentNarrow])}>
                  <h1 className={clsx([styles.t1, styles.h1])}>The Monologues</h1>
                  <div className={clsx(['section-text', styles.headerText])}>
                    <p>
                      The Evolve Experience interweaves monologues from The New Black Fest’s{' '}
                      <em>Hands Up: 7 Playwrights, 7 Testaments</em>, and the Red Door Project’s own{' '}
                      <em>Cop Out: Beyond Black, White & Blue</em>.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.handsUpLogo}></div>
            </div>
            {/* small screens */}
            <div className={styles.contentWrapperSmall}>
              <div className={styles.monologueHeader}>
                <div className={clsx(['section-content', styles.narrowContent, styles.contentNarrow])}>
                  <h1 className={clsx([styles.t1, styles.h1])}>The Monologues</h1>
                  <div className={clsx(['section-text', styles.headerText])}>
                    <p>
                      The Evolve Experience interweaves monologues from The New Black Fest’s{' '}
                      <em>Hands Up: 7 Playwrights, 7 Testaments</em>, and the Red Door Project’s own{' '}
                      <em>Cop Out: Beyond Black, White & Blue</em>.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.headerIcons}>
                <div className={styles.copoutLogo}></div>
                <div className={styles.handsUpLogo}></div>
              </div>
            </div>
          </div>
        </section>
        {/* Hands UP */}
        <section>
          <div className={clsx(['section-content', styles.content])}>
            <div className={styles.sideText}>
              <h2 className={styles.h2}>Hands Up</h2>
              <p>
                In light of the police shootings of Mike Brown in Ferguson, Missouri and John Crawford III in
                Beavercreek, Ohio, among others, The New Black Fest commissioned seven emerging Black playwrights to
                write monologues that explore their feelings about the well-being of Black people in a culture of
                institutional profiling.
              </p>
              <div className={styles.sectionVideo}>
                <div className={clsx(['section-content', styles.video])}>
                  <div className={styles.embedContainer}>
                    <iframe
                      title="Hands Up - This is what theater is for"
                      src="https://www.youtube.com/embed/aoT1Krp9HF4"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className={styles.moreResources}>
                <h3 className={styles.h3}>More Resources</h3>
                <Link
                  linkClass={styles.externalLink}
                  href="https://racc.org/2017/03/28/using-theatre-change-racial-ecology-portland/"
                  propsForAnchor={{ target: '_blank' }}
                  text="Read about Hands Up and the Red Door mission."
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="https://youtu.be/UGRLXAeehDk"
                  propsForAnchor={{ target: '_blank' }}
                  text="City Club Forum: Listen to Director Kevin Jones and Retired Deputy Chief Robert Day discuss Hands Up and its impact on law enforcement."
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="https://kboo.fm/media/59255-hands-and-kevin-jones"
                  propsForAnchor={{ target: '_blank' }}
                  text="Listen to an interview with Kevin Jones on Stage and Studio on KBOO."
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="https://www.youtube.com/watch?v=5BvfYJflXGc&feature=youtu.be"
                  propsForAnchor={{ target: '_blank' }}
                  text="Watch the New Black Fest’s trailer for the National Black Theater’s Production of Hands Up."
                ></Link>
              </div>
            </div>
            <div className={styles.sideHandsUpPhoto}></div>
          </div>
        </section>

        {/* Cop out */}
        <section>
          <div className={clsx(['section-content', styles.content, styles.topBorder])}>
            <div className={styles.sideText}>
              <h2 className={styles.h2}>Cop Out</h2>
              <p>
                The Red Door Project commissioned <em>Cop Out: Beyond Black, White & Blue</em>—a series of monologues
                developed in conversation with <em>Hands Up: 7 Playwrights, 7 Testaments</em>. <em>Cop Out</em>{' '}
                monologues are based on interviews with law enforcement officers. Written by playwrights from across the
                country, the monologues depict cops of all ranks and experience as they interact with the community,
                each other, their families, and the institutions they represent.
              </p>
              <div className={styles.sectionVideo}>
                <div className={clsx(['section-content', styles.video])}>
                  <div className={styles.embedContainer}>
                    <iframe src="https://www.youtube.com/embed/6YUH2Oj_0zE" title="Cop Out: How it's Made"></iframe>
                  </div>
                </div>
              </div>
              <div className={styles.moreResources}>
                <h3 className={styles.h3}>More Resources</h3>
                <Link
                  linkClass={styles.externalLink}
                  href="https://www.oregonlive.com/expo/news/erry-2018/09/fd3c25314d6407/groundbreaking-portland-play-r.html"
                  propsForAnchor={{ target: '_blank' }}
                  text="The Oregonian: Groundbreaking Portland play reveals the people behind the thin blue line."
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="https://www.pdxmonthly.com/articles/2018/12/21/what-happens-when-you-put-the-stories-of-police-officers-onstage"
                  propsForAnchor={{ target: '_blank' }}
                  text="PDX Monthly: What Happens When you Put The Stories of Police Officers Onstage?"
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="http://www.orartswatch.org/talking-a-blue-streak/"
                  propsForAnchor={{ target: '_blank' }}
                  text="OR ArtsWatch Cop Out Review: Talking A Blue Streak."
                ></Link>
                <Link
                  linkClass={styles.externalLink}
                  href="http://www.oregonlive.com/portland/index.ssf/2018/03/two_men_a_play_and_an_unlikely.html"
                  propsForAnchor={{ target: '_blank' }}
                  text="The Oregonian: One play, two men, and a conversation about police and race."
                ></Link>

                <Link
                  linkClass={styles.externalLink}
                  href="https://www.orartswatch.org/from-hands-up-to-cop-out/"
                  propsForAnchor={{ target: '_blank' }}
                  text="OR ArtsWatch: From Hands Up to Cop Out."
                ></Link>
              </div>
            </div>
            <div className={styles.sideCopOutPhoto}></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Monologues;
