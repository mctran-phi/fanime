import Head from 'next/head';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Anime</title>
        <link rel="icon" href="/pikachu.svg" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.title}>Anime</h1>
        <img className={styles.image} src='/sharingan.png'></img>
      </div>
    </div>
  );
}

export default Header;