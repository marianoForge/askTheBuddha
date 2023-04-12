import Head from 'next/head';
import BuddhaInput from '../components/BuddhaInput';
import LatestPosts from '../components/LatestPosts';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Buddha AI</title>
        <meta name="description" content="The BUddha App AI" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1>Buddha is Sleeping. Will Wake up Soon</h1>
      </main>
      <footer className={styles.footer}>
        2023 - Coded by Mariano De Simone - All Rights Reserved
      </footer>
    </div>
  );
}
