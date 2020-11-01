import Head from 'next/head';
import Nav from '../components/Nav';
import clsx from 'clsx';
import styles from '../styles/Donate.module.scss';

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | Donate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', styles.img])}></div>
        </div>
        <section className={styles.sectionGem}>
          <div className={clsx(['section-content', styles.contentNarrow])}>
            <h1 className={styles.h1}>Donate</h1>
            <p>
              Over the years, we've honed <i>Evolve</i> into a powerful and proven product. A way to generate compassion
              and empathy, even in the midst of profound disagreement.
            </p>
            <p>
              Now, it is time to take <i>Evolve</i> further. To bring this work to every city, community, law
              enforcement and every criminal justice agency in America.{' '}
              <strong>Donate to The Red Door Project and help create a society where everyone will thrive.</strong>
            </p>
            <a href="https://app.arts-people.com/index.php?donation=awrdp" className={styles.button} target="__blank">
              Donate
            </a>
            <p>
              Or{' '}
              <a href="https://reddoorproject.org/wp-content/uploads/2020/08/RedDoorProjectDonationForm.pdf">
                download the donation form (PDF)
              </a>{' '}
              and mail it in with your check or credit card information.
            </p>
            <p className="s1">
              The Red Door Project is a 501(c)(3) nonprofit, charitable organization based in Portland, Oregon.
              Additional information is available from the Oregon Department of Justice Charitable Activities Section at
              971.673.1880.
            </p>
          </div>
        </section>
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', styles.img1])}></div>
        </div>
        <section>
          <div className={clsx(['section-content', styles.contribution])}>
            <h2 className={styles.h2}>Other ways to contribute</h2>
            <div className={styles.sectionListItem}>
              <div className={styles.sectionImage}>
                <img src="/assets/cultural_trust_logo.png" alt="Cultural Trust logo" />
              </div>
              <div className={styles.sectionDescription}>
                <h3 className={styles.h3}>Oregon Cultural Trust</h3>
                <p>
                  Do you live in Oregon? Have you already donated to the Red Door this year? You can double your impact
                  for free! Make a matching donation to the Oregon Cultural Trust by December 31st and claim the amount
                  of your donation to the Trust as a tax credit. Find all the details at{' '}
                  <a target="__blank" href="https://culturaltrust.org/">
                    culturaltrust.org
                  </a>
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
                  AmazonSmile is a simple and automatic way for you to support The Red Door Project every time you shop,
                  at no cost to you. When you shop at{' '}
                  <a
                    target="__blank"
                    href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=45-3729152&ref_=smi_ext_ch_45-3729152_cl"
                  >
                    smile.amazon.com
                  </a>
                  , you’ll have the same shopping experience as Amazon.com, with the added bonus that Amazon will donate
                  .5% of the purchase price to the Red Door Project.
                </p>
                <h4 className={styles.h4}>How Does It Work?</h4>
                <p>
                  To shop at AmazonSmile simply go to{' '}
                  <a
                    target="__blank"
                    href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=45-3729152&ref_=smi_ext_ch_45-3729152_cl"
                  >
                    smile.amazon.com
                  </a>
                  . On your first visit to AmazonSmile, you need to select a non-profit to receive donations from your
                  purchases before you begin shopping. Simply type in The Red Door Project and select us. AmazonSmile
                  will remember your selection, and then every eligible purchase you make on AmazonSmile will result in
                  a donation.
                </p>
              </div>
            </div>

            <div className={styles.sectionListItem}>
              <div className={styles.sectionImage}>
                <img src="/assets/fred_meyers_community_rewards_logo.jpg" alt="Fred Meyer’s Community Rewards logo" />
              </div>
              <div className={styles.sectionDescription}>
                <h3 className={styles.h3}>Shop With Your Fred Meyer’s Reward Card</h3>
                <p>
                  Here’s how the program works:
                  <ul>
                    <li>
                      Sign up for the Community Rewards Program by{' '}
                      <a target="__blank" href="https://www.fredmeyer.com/i/community/community-rewards">
                        linking your Fred Meyer’s Reward Card to the Red Door
                      </a>
                      .
                    </li>
                    <li>Search for us by name (The Red Door Project) or by our non-profit number (VK442)</li>
                    <li>
                      Then, every time you shop and use your Rewards Card, you are helping The Red Door Project earn a
                      donation. The more supporters who register their Rewards Card and link it to The Red Door Project,
                      the larger our donation!
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;