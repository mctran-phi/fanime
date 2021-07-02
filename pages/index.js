import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import Filter from '../components/Filter';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from '../styles/Home.module.css';
import getRequest from '../utils/fetch.js';
import $ from 'jquery';

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
  const [select, setSelect] = useState('0');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    setOffset(0);
    // const loadAnimes = async () => {
    //   var newAnimes;
    //   if (select === '0') {
    //     newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]');
    //   } else if (select === '1') {
    //     newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank');
    //   } else if (select === '2') {
    //     newAnimes = await getRequest('https://kitsu.io/api/edge/anime?page[limit]=20&sort=updatedAt');
    //   } else {
    //     newAnimes= await getRequest(`https://kitsu.io/api/edge//anime?page[limit]=20&filter[categories]=${select}&sort=popularityRank`);
    //   }
    //   setAnimes(newAnimes);
    // }
    // loadAnimes();
  }, [select]);

  useEffect(async () => {
    var newAnimes;
    setLoading(true);
    if (select === '0') {
      newAnimes = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`);
    } else if (select === '1') {
      newAnimes = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank&page[offset]=${offset}`);
    } else if (select === '2') {
      newAnimes = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&sort=updatedAt&page[offset]=${offset}`);
    } else {
      newAnimes= await getRequest(`https://kitsu.io/api/edge//anime?page[limit]=20&filter[categories]=${select}&sort=popularityRank&page[offset]=${offset}`);
    }
    offset === 0 ? setAnimes(newAnimes) : setAnimes([...animes, ...newAnimes]);
    setLoading(false);
  }, [offset, select]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);


  var handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset(prev => prev + 20);
    }
  }, []);

  var handleSearch = async query => {
    setQuery(query);
    let search = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&filter[text]=${query}`);
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
      {console.log(animes)}
      <img className={styles.image} src='/up-arrow.svg' onClick={e => handleScrollTop()}></img>
      <Search handleSearch={handleSearch} handleClear={handleClear} query={query} />
      <Filter handleSelect={handleSelect} />
      <div className={styles.body}>
        {query.length > 0 ? <AnimeList animes={search}/> : <AnimeList animes={animes} />}
        <Panel handleSelect={handleSelect} />
      </div>
      {loading && <div>Loading Animes...</div>}
      <div ref={loader}></div>
    </div>
  );
}