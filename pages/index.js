import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer/Footer';
import clsx from 'clsx';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className="main" id="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
          <div className={clsx(['banner', styles.banner])}>
            <img src="/assets/evolve_logo.png" alt="The Evolve Experience logo" />
            <div className={styles.quote}>
              <q>
                The most meaningful presentation I have ever seen on race, power imbalances, and the exercise of
                authority.
              </q>
              <span>
                <i>Circuit Court Judge, State of Oregon</i>
              </span>
            </div>
          </div>
        </div>

        <section className={styles.sectionGem}>
          <div className={clsx(['section-content', styles.contentNarrow])}>
            <h1 className={styles.h2}>
              About <i>The Evolve Experience</i>
            </h1>
            <p>
              <i>The Evolve Experience</i> explores the relationship between criminal justice and the communities they
              serve.
            </p>
            <p>
              In the midst of profound conflict, <i>The Evolve Experience</i> challenges our biases and takes this
              charged, complex conversation to a level that generates compassion and empathy.
            </p>
          </div>
        </section>

        <section className={styles.sectionVideo}>
          <div className={clsx(['section-content', styles.video])}>
            <div className={styles.embedContainer}>
              <iframe title="The Evolve Experience" src="https://www.youtube.com/embed/vano1uIgU_g"></iframe>
            </div>
          </div>
        </section>

        <section className={styles.sectionDeep}>
          <div className={clsx(['section-content', styles.impactSectionContent])}>
            <h2 className={styles.h2}>
              Problems Addressed by <i>The Evolve Experience</i>
            </h2>
            <div className={styles.columns}>
              <p className={styles.column}>
                The hyper-divisive public climate leading to breakdown in public conversation.
              </p>
              <p className={styles.column}>
                Conflicting agendas and cultural differences leading to a lack of trust between criminal justice
                institutions and community.
              </p>
              <p className={styles.column}>
                Increased harm and decreased public safety for vulnerable populations and law enforcement.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={clsx(['section-content', styles.content])}>
            <div className={styles.sideText}>
              <h2 className={styles.h2}>Our Solution</h2>
              <p>
                <i>The Evolve Experience</i> is a <strong>unique workshop</strong> designed for criminal justice
                professionals and community stakeholders that combines dramatic storytelling and audience engagement.
              </p>
              <h3 className={styles.h3}>Theatre Component</h3>
              <img src="/assets/evolve_3_performersonstage.jpg" alt="Theatre component illustration. Actors on stage" />
              <p>
                <i>The Evolve Experience</i> is built first on theatre - dramatically-crafted stories based on both the
                lived experiences of African Americans and police officers struggling to make sense of a system that may
                not be serving either the public or the officers themselves.
              </p>

              <h3 className={styles.h3}>Audience Engagement</h3>
              <img
                src="/assets/evolve_4_peoplediscussing.jpg"
                alt="Audience engagement illustration. People discussing"
              />
              <p>
                The theatrical portion of the program is followed by a curriculum designed to encourage participants to
                self-reflect and to listen to others who may have different or polarizing viewpoints. This increases
                capacity for the complex and nuanced thinking required to address critical social issues.
              </p>
            </div>

            <div className={styles.sidePhoto}></div>
          </div>
        </section>
        <section className={styles.quoteSection}>
          <div className={clsx(['section-content', styles.quoteSectionContent])}>
            <q>
              When we come to Evolve and we witness these stories on stage, we are seeing ourselves reflected. This show
              gives us a common ground to stand on. This process works. Over the past 3 years, we’ve honed The Evolve
              Experience into a powerful and proven product. A way to generate compassion and empathy, even in the midst
              of profound disagreement. Now, it’s time to take The Evolve Experience further. To bring this work to
              every city, community, law enforcement and criminal justice agency in America. And to do that, we need
              major support now. Your support. Please donate and let’s Evolve together. The Evolve Experience creates
              more equitably functioning local criminal justice ecosystems. You have the power to make this a reality.
            </q>
            <p>
              <span>Kevin Jones and Lesli Mones, </span>
              <br />
              <span>Founders, The Red Door Project</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
