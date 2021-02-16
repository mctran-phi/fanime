import {useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeList from './EpisodeList';
import styles from '../styles/Episodes.module.css';

const Episodes = ({id}) => {
  const [episodes, setEpisodes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const loadEpisodes = async () => {
      setLoading(true);
      const newEpisodes = await getEpisodes(offset);
      setEpisodes(prev => [...prev, ...newEpisodes]);
      setLoading(false);
    }
    loadEpisodes();
  }, [offset]);

  let getEpisodes = async offset => {
    let episodes = await axios(`https://kitsu.io/api/edge/anime/${id}/episodes?page[limit]=20&page[offset]=${offset}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
      .then(res => res.data.data)
      .catch(err => console.error(err));
    return episodes;
  };

  let handleScroll = () => {
    if (window.scrollY + 335 > document.getElementsByClassName(styles.episodes)[0].clientHeight) {
      setOffset(prev => prev + 20);
    }
  };

  return (
    <div className={styles.episodes}>
      {episodes.map(episode => <EpisodeList key={episode.id} episode={episode}/>)}
      <div>{loading && 'Loading...'}</div>
    </div>
  );
}

export default Episodes;