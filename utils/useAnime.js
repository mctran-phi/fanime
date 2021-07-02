import { useState, useEffect } from 'react';
import getRequest from './fetch.js';

const useAnime = (query, offset, select) => {
  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);

  useEffect(async () => {
    var newAnimes;
    setLoading(true);
    if (select === '0') {
      newAnimes = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&&page[offset]=${offset}`);
    } else if (query.length > 0) {
      newAnimes = await getRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&filter[text]=${query}&page[offset]=${offset}`);
    } else {
      newAnimes= await getRequest(`https://kitsu.io/api/edge//anime?page[limit]=20&filter[categories]=${select}&sort=popularityRank&page[offset]=${offset}`);
    }
    offset === 0 ? setAnimes(newAnimes) : setAnimes([...animes, ...newAnimes]);
    setLoading(false);
  }, [offset, select, query]);
  return { loading, animes };
};

export default useAnime;