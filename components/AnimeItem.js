import Link from 'next/link'
import styles from '../styles/AnimeItem.module.css';

const AnimeItem = ({ anime }) => {
  return (
    <Link href="/anime/[id]" as={`/anime/${anime.id}`}>
      <div className={styles.anime_item}>
        {anime.attributes.posterImage ? <img className={styles.image} src={anime.attributes.posterImage.tiny}></img> : <h1>N/A</h1>}
        {anime.attributes.titles.en_jp ? <p>{anime.attributes.titles.en_jp}</p> : <p>N/A</p>}
      </div>
    </Link>
  );
}

export default AnimeItem;