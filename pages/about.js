import Head from "next/head";
import Nav from "../components/Nav";
import Link from "../components/Link/Link";
import Footer from "../components/Footer/Footer";
import clsx from "clsx";
import styles from "../styles/AboutUs.module.scss";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <div className={clsx(["section", styles.sectionBlack])}>
          <div className={clsx(["section-content", styles.hero])}>
            <div className={styles.banner}>
              <img src="/assets/rdplogo.png" alt="The Red Door Project logo" />
            </div>
          </div>
        </div>
        <section>
          <div className={clsx(["section-content", styles.content])}>
            <div className={styles.sidePhoto}></div>
            <div className={styles.sideText}>
              <h1 className={clsx(["t1", styles.h1])}>
                About the Red Door Project
              </h1>
              <p>
                <strong>
                  Founded in 2011, The Red Door Project is a 501(c)(3) Nonprofit
                  Organization on a mission to change racial ecology through the
                  arts.
                </strong>
              </p>
              <p>
                Through the Red Door, we use theater to address the conflict
                between the criminal justice system and communities of color. We
                produce theatrical productions and professional provider
                education, and provide services to criminal justice
                professionals and community-based organizations. Our work
                broadly benefits the general public and specifically people of
                color who are disproportionately impacted by the breakdown in
                relations between police and communities.
              </p>
              <p>
                At the Red Door, we have one guiding principle: all systems do
                three things: they protect, expand and evolve. We bring a unique
                model to the issue of race through a systems approach that helps
                participants recognize when they are in protection/fear mode,
                and provides a framework to move beyond it; to thoughtfully
                consider root causes of problems, interconnections and needed
                changes in existing policies, laws and programs.
              </p>
              <p>
                We believe that art is the transformational agent to help people
                move through their natural tendency to protect and begin to
                address the reforms needed in our criminal justice system.
              </p>
              <ul>
                <li>
                  <em>More than 30 years of leadership experience</em> in
                  theatre arts and facilitating conflict resolution
                </li>
                <li>
                  <em>
                    More than $750K investment by Oregon foundations and donors
                  </em>
                </li>
                <li>
                  <em>75 public performances</em>, including facilitated
                  conversations, of two productions dealing with racial
                  profiling from both the community and police perspectives
                  since 2016
                </li>
                <li>
                  Creation and presentation of The Evolve Experience workshop
                  specifically for criminal justice professionals
                </li>
                <li>Continuous evaluation and quality improvement</li>
                <li>
                  Development of acting troupe utilizing a diverse group of
                  actors of color.
                </li>
                <li>
                  Commission of nationally-recognized writers from the world of
                  television, film and stage
                </li>
                <li>
                  Cultivation of partners from multiple sectors including
                  extensive relationship-building with law enforcement
                </li>
                <li>
                  Media campaign resulting in state and national recognition,
                  diversified funding and sustainability
                </li>
              </ul>
              <span className={styles.span}>
                To learn more,{" "}
                <Link
                  href="https://reddoorproject.org/"
                  propsForAnchor={{ target: "_blank" }}
                  text="visit RedDoorProject.org"
                ></Link>
                .
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
