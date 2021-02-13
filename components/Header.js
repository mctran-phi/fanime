import Head from 'next/head';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Anime</h1>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Header;