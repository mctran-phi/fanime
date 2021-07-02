import Link from 'next/link';
import AnimeList from '../components/AnimeList';
import Search from '../components/Search';
import Panel from '../components/Panel';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from '../styles/Home.module.css';
import getRequest from '../utils/fetch.js';
import useAnime from '../utils/useAnime.js';
import $ from 'jquery';

export default function Home() {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [select, setSelect] = useState('0');
  const [filter, setFilter] = useState({
    offset: 0,
    select: '0'
  });
  const { loading, animes } = useAnime(query, filter.offset, filter.select);
  const loader = useRef(null);

  useEffect(() => {
    setFilter({
      select: select,
      offset: offset
    })
  }, [offset, select]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) observer.observe(loader.current);
  }, []);


  var handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset(prev => prev + 20);
    }
  }, []);

  var handleSearch = query => {
    setQuery(query);
    setOffset(0);
    setSelect(query || '0');
  };

  var handleClear = () => {
    setQuery('');
    setOffset(0);
    setSelect('0');
  };

  var handleSelect = value => {
    setOffset(0);
    setSelect(value);
  };

  var handleScrollTop = () => {
    $('html, body').animate({scrollTop: 0});
  };

  return (
    <div>
      <img className={styles.image} src='/up-arrow.svg' onClick={e => handleScrollTop()}></img>
      <Search handleSearch={handleSearch} handleClear={handleClear} query={query} />
      <div className={styles.body}>
        <AnimeList animes={animes} />
        <Panel handleSelect={handleSelect} />
      </div>
      {loading && <div>Loading Animes...</div>}
      <div ref={loader}></div>
    </div>
  );
}