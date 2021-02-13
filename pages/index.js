import styles from '../styles/Home.module.css';
import Link from 'next/link';
import AnimeItem from '../components/AnimeItem';

export default function Home({animes}) {
  console.log(animes);
  return (
    <div>
      {animes.map(anime => <AnimeItem key={anime.id} anime={anime.attributes}/>)}
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
