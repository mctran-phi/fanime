import Link from 'next/link';
import AnimeItem from '../components/AnimeItem';
import styles from '../styles/Home.module.css';

export default function Home({animes}) {
  console.log(animes);
  return (
    <div>
      <div className={styles.anime_list}>
        {animes.map(anime => <AnimeItem key={anime.id} anime={anime.attributes}/>)}
      </div>
      <div className={styles.buttons}>
        <button className={styles.prev}>Prev</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const animes = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=10', {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  })
    .then(res => res.json())
    .then(res => res.data)
    .catch(err => console.error(err));

  return {
    props: {
      animes
    }
  };
}
