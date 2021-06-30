import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import getRequest from '../utils/fetch.js';

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadAnimes = async () => {
      setLoading(true);
      const newAnimes = await getAnimes(offset);
      setAnimes(prev => [...prev, ...newAnimes]);
      setLoading(false);
    }
    loadAnimes();
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  let getAnimes = async offset => {
    return await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`);
  };

  let handleScroll = () => {
    try {
      if (window.scrollY > document.getElementsByClassName(styles.body)[0].clientHeight - 302) {
        setOffset(prev => prev + 20);
      }
    } catch (err) {
      console.error(err);
    }
  };

  let handleChange = async query => {
    setQuery(query);
    let search = await getRequest(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
    setSearch(search);
  }

  let handleClear = () => {
    setQuery('');
  }

  return (
    <div>
      <Search handleChange={handleChange} handleClear={handleClear} search={search}/>
      <div className={styles.body}>
        {query.length > 0 ? <AnimeList animes={search}/> : <AnimeList animes={animes}/>}
        <Panel />
      </div>
      <div className={styles.load}>{loading && 'Loading...'}</div>
    </div>
  );
}