import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Link from "../components/Link/Link";
import ImageLink from "../components/Link/ImageLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Evolve Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Welcome to the home page!</h1>

        <p>
          <Link
            href="https://www.google.com"
            text="download the donation form (PDF)"
          />
          <ImageLink
            href="https://reddoorproject.org/"
            altText="Red Door Project Home"
            src="/assets/rdplogo.png"
            width={60}
            height={50}
          />
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
