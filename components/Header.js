import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.head}>
      <Head>
        <title>Fanime</title>
        <link rel="icon" href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href='/'>
            <h1 className={styles.title}>Fanime</h1>
          </Link>
          <Link href='/'>
            <img className={styles.image} src='/onepunch_man.png' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;