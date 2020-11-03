import Head from "next/head";
import Nav from "../components/Nav";
import Link from "../components/Link/Link";
import clsx from "clsx";
import styles from "../styles/Monologues.module.scss";
import Footer from "../components/Footer/Footer";
import HandsUpIcon from "../components/Icon/HandsUpIcon";

const Monologues = () => {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | The Monologues</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <div className={clsx(["section", styles.sectionBlack])}>
          <div className={clsx(["section-content", styles.img])}></div>
        </div>
        <section className={styles.sectionGem}>
          <div className={clsx(["section-content", styles.contentNarrow])}>
            <h1 className={styles.h1}>The Monologues</h1>

            <p>
              The Evolve Experience interweaves monologues from The New Black Fest’s Hands Up: 7
              Playwrights, 7 Testaments, and the Red Door Project’s own Cop Out: Beyond Black, White
              & Blue.
            </p>

            <HandsUpIcon />
          </div>
        </section>
        {/* <div className={clsx(["section", styles.sectionBlack])}>
          <div className={clsx(["section-content", styles.img1])}></div>
        </div>
        <section className={styles.sectionContribution}>
          <div className={clsx(["section-content", styles.contribution])}>
            <h2 className={styles.h2}>Other ways to contribute</h2>
            <div className={styles.sectionListItem}>
              <div className={styles.sectionImage}>
                <img src="/assets/cultural_trust_logo.png" alt="Cultural Trust logo" />
              </div>
              <div className={styles.sectionDescription}>
                <h3 className={styles.h3}>Oregon Cultural Trust</h3>
                <p>
                  Do you live in Oregon? Have you already donated to the Red Door this year? You can
                  double your impact for free! Make a matching donation to the Oregon Cultural Trust
                  by December 31st and claim the amount of your donation to the Trust as a tax
                  credit.{" "}
                  <Link
                    href="https://culturaltrust.org/"
                    propsForAnchor={{ target: "_blank" }}
                    text="Find all the details at culturaltrust.org"
                  ></Link>
                  .
                </p>
              </div>
            </div>

            <div className={styles.sectionListItem}>
              <div className={styles.sectionImage}>
                <img src="/assets/amazon_smile_logo.png" alt="Amazon Smile logo" />
              </div>
              <div className={styles.sectionDescription}>
                <h3 className={styles.h3}>Shop With Amazon Smile</h3>
                <h4 className={styles.h4}>What is Amazon Smile?</h4>
                <p>
                  AmazonSmile is a simple and automatic way for you to support The Red Door Project
                  every time you shop, at no cost to you. When you shop at{" "}
                  <Link
                    href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=45-3729152&ref_=smi_ext_ch_45-3729152_cl"
                    propsForAnchor={{ target: "_blank" }}
                    text="smile.amazon.com"
                  ></Link>
                  , you’ll have the same shopping experience as Amazon.com, with the added bonus
                  that Amazon will donate .5% of the purchase price to the Red Door Project.
                </p>
                <h4 className={styles.h4}>How Does It Work?</h4>
                <p>
                  To shop at AmazonSmile simply go to{" "}
                  <Link
                    href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=45-3729152&ref_=smi_ext_ch_45-3729152_cl"
                    propsForAnchor={{ target: "_blank" }}
                    text="smile.amazon.com"
                  ></Link>
                  . On your first visit to AmazonSmile, you need to select a non-profit to receive
                  donations from your purchases before you begin shopping. Simply type in The Red
                  Door Project and select us. AmazonSmile will remember your selection, and then
                  every eligible purchase you make on AmazonSmile will result in a donation.
                </p>
              </div>
            </div>

            <div className={styles.sectionListItem}>
              <div className={styles.sectionImage}>
                <img
                  src="/assets/fred_meyers_community_rewards_logo.jpg"
                  alt="Fred Meyer’s Community Rewards logo"
                />
              </div>
              <div className={styles.sectionDescription}>
                <h3 className={styles.h3}>Shop With Your Fred Meyer’s Reward Card</h3>

                <p> Here’s how the program works:</p>
                <ul>
                  <li>
                    Sign up for the Community Rewards Program by{" "}
                    <Link
                      href="https://www.fredmeyer.com/i/community/community-rewards"
                      propsForAnchor={{ target: "_blank" }}
                      text="linking your Fred Meyer’s Reward Card to the Red Door"
                    ></Link>
                    .
                  </li>
                  <li>
                    Search for us by name (The Red Door Project) or by our non-profit number (VK442)
                  </li>
                  <li>
                    Then, every time you shop and use your Rewards Card, you are helping The Red
                    Door Project earn a donation. The more supporters who register their Rewards
                    Card and link it to The Red Door Project, the larger our donation!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Monologues;
