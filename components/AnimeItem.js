import Link from 'next/link'
import styles from '../styles/AnimeItem.module.css';

const AnimeItem = ({ anime }) => {
  return (
    <Link href="/anime/[id]" as={`/anime/${anime.id}`}>
      <div className={styles.anime_item}>
        <img className={styles.image} src={anime.attributes.posterImage.tiny}></img>
        <p>{anime.attributes.titles.en_jp}</p>
      </div>
    </Link>
  );
}

export default AnimeItem;