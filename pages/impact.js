import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import Link from '../components/Link/Link';
import Footer from '../components/Footer/Footer';
import clsx from 'clsx';
import styles from '../styles/Impact.module.scss';

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>Impact of The Evolve Experience</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className="main" id="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', 'hero', styles.hero])}></div>
        </div>
        <section className={styles.sectionGem}>
          <div className={clsx(['section-content', styles.impactSectionContent])}>
            <div className={styles.narrowContent}>
              <h1 className={styles.h1}>Impact of The Evolve Experience</h1>
              <p className={clsx(['t3', styles.textCenter])}>
                <strong>
                  By providing a framework to witness lived experiences and engage in open dialogue,{' '}
                  <i>The Evolve Experience</i> enables participants to connect with their common humanity across
                  difference, discover shared values, take on alternative views, see multiple truths and understand what
                  it might feel like to be someone else.
                </strong>
              </p>
            </div>
            <div className={styles.columns}>
              <p className={styles.column}>
                <span>
                  <i>The Evolve Experience</i> takes charged, complex conversation to a level that generates compassion
                  and empathy even in the face of profound disagreement, and stimulates conversation in a new way to
                  help us bridge a seemingly intractable divide.
                </span>
              </p>
              <p className={styles.column}>
                <span>
                  Exposure to <i>The Evolve Experience</i> has a propensity to lower people’s defenses and allows them
                  to engage each other in a deeper, more sympathetic way, which opens up more meaningful,
                  solution-oriented discussion.
                </span>
              </p>
              <p className={styles.column}>
                <span>
                  Ultimately, <i>The Evolve Experience</i> seeks to transform human relations, and increase our
                  collective capacity to productively address significant social issues.
                </span>
              </p>
            </div>

            <div className={styles.narrowContent}>
              <p className="t3">
                Immediately following <i>The Evolve Experience</i>, participants report increased motivation to:
              </p>
              <ul>
                <li>Listen to people who have vastly different life experiences.</li>
                <li>Form new partnerships with groups or organizations with alternative points of view.</li>
                <li>Consider an opposing idea, even while holding a strong point of view.</li>
                <li>
                  Identify specific ideas, channels and activities to improve relationships between the criminal justice
                  system and the community.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className={clsx(['section-content', styles.quotesSectionContent])}>
            <h2 className={styles.h2}>Acclaim for The Evolve Experience</h2>
            <div className={styles.columns}>
              <p className={styles.column}>
                <q>
                  In the law enforcement community, it is difficult to find training that invokes emotion and curious
                  thought. While the conversation around bias continues, it is usually very shallow, scripted, and
                  without passion... <i>The Evolve Experience</i> is far and above some of the best “training” I have
                  ever attended.
                </q>
                <span className={clsx(['caption', styles.caption])}>
                  {' '}
                  <br />
                  Terry Moss
                  <br />
                  Leadership Development Coordinator
                  <br />
                  OR Department Public Safety Standards and Training
                </span>
              </p>
              <p className={styles.column}>
                <q>
                  The combination of performance, discussion, and bridging understanding makes{' '}
                  <i>The Evolve Experience</i> one of the best and most meaningful trainings I’ve participated in... I
                  believe that the judges of Oregon will benefit from this unique educational opportunity which in turn
                  will benefit every Oregonian we serve.
                </q>
                <span className={clsx(['caption', styles.caption])}>
                  {' '}
                  <br />
                  Adrienne Nelson
                  <br />
                  Associate Justice
                  <br />
                  Oregon Supreme Court
                </span>
              </p>
              <p className={styles.column}>
                <q>
                  One of the most powerful things about the project is its utter humanity. It is surprising, harrowing,
                  and rich. It is social justice work, it is educational, and it is powerful theater. It gives hope. Not
                  an easy hope, but a hope that takes courage and conviction to embrace.
                </q>
                <span className={clsx(['caption', styles.caption])}>
                  {' '}
                  <br />
                  Maureen Porter
                  <br />
                  Managing Artistic Director
                  <br />
                  Third Rail Repertory Theatre
                </span>
              </p>
            </div>
          </div>
        </section>
        <div className={clsx(['section', styles.sectionImage])}></div>
        <section>
          <div className={clsx(['section-content', styles.content])}>
            <div className={styles.sideText}>
              <h2 className={styles.h2}>Learn More</h2>
              <Link
                href="https://www.youtube.com/watch?v=kqZpIRizRMQ&feature=youtu.be&ab_channel=TheRedDoorProject"
                propsForAnchor={{ rel: 'noopener', target: '_blank' }}
                text="Protect, Expand, Evolve"
              ></Link>
              <p>
                This 7-minute video explains our mission, our philosophy and our approach to the work that we engage in
                to change racial ecology.
              </p>
              <Link
                href="https://www.pbs.org/newshour/show/how-portlands-black-community-and-police-are-sharing-their-stories-through-theater"
                propsForAnchor={{ rel: 'noopener', target: '_blank' }}
                text="PBS Newshour: How Portland’s Black community and police are sharing their stories through
                  theater"
              ></Link>
              <p>
                This 8-minute feature on PBS Newshour digs into The Evolve Experience. Originally broadcast on August
                19, 2019.
              </p>
              <Link
                href="https://www.youtube.com/watch?v=za8KE_s5LgM&feature=youtu.be&ab_channel=TEDxTalks"
                propsForAnchor={{ rel: 'noopener', target: '_blank' }}
                text="Evolving Through Dissonance"
              ></Link>
              <p>
                Kevin Jones’ 2019 TEDx talk digs deep into the philosophy that led The Red Door Project to the
                development of The Evolve Experience.
              </p>
              <Link
                href="https://listenerspodcast.uoregon.edu/2019/04/27/16-august-wilson-red-door-project-hands-up-cop-out-look-within-evolve/"
                propsForAnchor={{ rel: 'noopener', target: '_blank' }}
                text="Kevin and Lesli on The Listeners Podcast"
              ></Link>
              <p>
                The Listeners Podcast is a show about the craft and power of listening, produced by the Agora Journalism
                Center, the gathering place for innovation in communication and civic engagement at University of
                Oregon’s School of Journalism and Communication. Kevin and Lesli chat with host Andrew DeVigal about
                closing the gap between racial divides by taking center stage.
              </p>
              <Link
                href="https://www.portlandmercury.com/spring-arts-2019/2019/03/14/26148785/the-august-wilson-red-door-project-pushes-boundaries-with-a-purpose"
                propsForAnchor={{ rel: 'noopener', target: '_blank' }}
                text="
                  Portland Mercury: The Red Door Project Pushes Boundaries with a Purpose"
              ></Link>
              <p>
                The Portland Mercury’s Steven Humphrey explores the Red Door Project’s journey from Hands Up to Cop Out
                to Evolve and how all of this work connects with our mission: to change racial ecology through the arts
              </p>
            </div>
            <div className={styles.sidePhoto}></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
