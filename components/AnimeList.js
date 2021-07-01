import AnimeItem from './AnimeItem.js';
import styles from '../styles/AnimeList.module.css';

const AnimeList = ({ animes }) => {
  return (
    <div className={styles.anime_list}>
      {animes.map(anime => <AnimeItem key={anime.id} anime={anime}/>)}
    </div>
  );
}

export default AnimeList;