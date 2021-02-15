import {useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeList from './EpisodeList';
import styles from '../styles/Episodes.module.css';

const Episodes = ({id}) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios(`https://kitsu.io/api/edge/anime/${id}/episodes`)
      .then(res => setEpisodes(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {episodes.map(episode => <EpisodeList key={episode.id} episode={episode}/>)}
    </div>
  );
}

export default Episodes;