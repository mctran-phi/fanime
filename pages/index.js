import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import React, {useState} from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home({anime}) {
  const [animes, setAnimes] = useState(anime);
  return (
    <div>
      <Search />
      <div className={styles.body}>
        <AnimeList animes={animes}/>
        <Panel />
      </div>
      <div className={styles.buttons}>
        <button className={styles.prev}>Prev</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let anime = await axios('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0', {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  })
    .then(res => res.data.data)
    .catch(err => console.error(err));

  return {
    props: {
      anime
    }
  };
}
