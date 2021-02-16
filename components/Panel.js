import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from '../styles/Panel.module.css';

const Panel = () => {
  const [popular, setPopular] = useState([]);
  const [updated, setUpdated] = useState([]);

  useEffect(() => {
    axios('https://kitsu.io/api/edge/anime?sort=popularityRank', {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    }).then(res => setPopular(res.data.data))
      .catch(err => console.error(err));

    axios('https://kitsu.io/api/edge/anime?sort=updatedAt', {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    }).then(res => setUpdated(res.data.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className={styles.body}>
      <div>
        <h4>Genres</h4>
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Slice of Life</li>
          <li>Fantasy</li>
          <li>Magic</li>
          <li>Horror</li>
          <li>Mystery</li>
          <li>Psychological</li>
          <li>Romance</li>
          <li>Sci-Fi</li>
        </ul>
      </div>
      <div>
        <h4>Popular Anime</h4>
        <ul>
          {popular.map(anime => <li key={anime.id}>{anime.attributes.titles.en_jp}</li>)}
        </ul>
      </div>
      <div>
        <h4>Recently Updated</h4>
        <ul>
          {updated.map(anime => <li key={anime.id}>{anime.attributes.titles.en_jp}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Panel;