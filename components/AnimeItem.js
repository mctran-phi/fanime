import styles from '../styles/AnimeItem.module.css';

const AnimeItem = ({anime}) => {
  return (
    <div className={styles.anime_item}>
      <img src={anime.posterImage.tiny}></img>
      <p>{anime.titles.en_jp}</p>
    </div>
  );
}

export default AnimeItem;