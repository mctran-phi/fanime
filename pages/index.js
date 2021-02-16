import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const loadAnimes = async () => {
      setLoading(true);
      const newAnimes = await getAnimes(offset);
      setAnimes(prev => [...prev, ...newAnimes]);
      setLoading(false);
    }
    loadAnimes();
  }, [offset]);

  let getAnimes = async offset => {
    let anime = await axios(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
      .then(res => res.data.data)
      .catch(err => console.error(err));
    return anime;
  };

  let handleScroll = () => {
    if (window.scrollY > document.getElementsByClassName(styles.body)[0].clientHeight - 302) {
      setOffset(prev => prev + 20);
    }
  };

  return (
    <div>
      <Search />
      <div className={styles.body}>
        <AnimeList animes={animes}/>
        <Panel />
      </div>
      <div className={styles.load}>{loading && 'Loading...'}</div>
    </div>
  );
}