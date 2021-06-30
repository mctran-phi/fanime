import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.head}>
      <Head>
        <title>Anime</title>
        <link rel="icon" href="/pikachu.svg" />
      </Head>
      <div className={styles.header}>
        <Link href='/'>
          <h1 className={styles.title}>Anime</h1>
        </Link>
        <Link href='/'>
          <img className={styles.image} src='/onepunch_man.png' />
        </Link>
      </div>
    </div>
  );
}

export default Header;