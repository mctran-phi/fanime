import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import Filter from '../components/Filter';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import getRequest from '../utils/fetch.js';
import $ from 'jquery';

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
      } else if (select === '2') {
        newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&sort=updatedAt');
      } else {
        newAnimes= await getRequest(`https://kitsu.io/api/edge//anime?page[limit]=20&filter[categories]=${select}&sort=popularityRank`);
      }
      setAnimes(newAnimes);
    }
    loadAnimes();
  }, [select]);

  var handleSearch = async query => {
    setQuery(query);
    let search = await getRequest(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
    setSearch(search);
  };

  var handleClear = () => {
    setQuery('');
  };

  var handleSelect = value => {
    setSelect(value);
  };

  var handleScrollTop = () => {
    $('html, body').animate({scrollTop: 0});
  };

  return (
    <div>
      <img className={styles.image} src='/up-arrow.svg' onClick={e => handleScrollTop()}></img>
      <Search handleSearch={handleSearch} handleClear={handleClear} search={search} />
      <Filter handleSelect={handleSelect} />
      <div className={styles.body}>
        {query.length > 0 ? <AnimeList animes={search}/> : <AnimeList animes={animes} />}
        <Panel handleSelect={handleSelect} />
      </div>
    </div>
  );
}