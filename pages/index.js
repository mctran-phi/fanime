import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import Filter from '../components/Filter';
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
  const [select, setSelect] = useState('0')

  useEffect(() => {
    var getAnimes;
    const loadAnimes = async () => {
      var newAnimes;
      if (select === '0') {
        newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=');
      } else if (select === '1') {
        newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank');
      } else {
        newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&sort=updatedAt');
      }
      setAnimes(newAnimes);
    }
    loadAnimes();
  }, [select]);

  let handleSearch = async query => {
    setQuery(query);
    let search = await getRequest(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
    setSearch(search);
  };

  let handleClear = () => {
    setQuery('');
  };

  let handleSelect = value => {
    setSelect(value);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} handleClear={handleClear} search={search}/>
      <Filter handleSelect={handleSelect} />
      <div className={styles.body}>
        {query.length > 0 ? <AnimeList animes={search}/> : <AnimeList animes={animes}/>}
        <Panel />
      </div>
    </div>
  );
}