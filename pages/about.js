import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Welcome to the about page!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
