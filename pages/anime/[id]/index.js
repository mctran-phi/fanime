import axios from 'axios'
import dayjs from 'dayjs';
import Episodes from '../../../components/Episodes.js';
import styles from '../../../styles/AnimeDescription.module.css';

const anime = ({anime}) => {
  const {data}= anime;

  return (
    <div>
      <div>
        <h2 className={styles.title}>{anime.attributes.titles.en_jp}</h2>
        <div className={styles.container}>
          <img src={anime.attributes.posterImage.small}></img>
          <div className={styles.info}>
            <div className={styles.description}>{anime.attributes.description}</div>
            <div>
              <div className={styles.data}>
                <label>Start Date: </label>
                <span>{dayjs(anime.attributes.startDate).format('MMMM D, YYYY')}</span>
              </div>
              <div className={styles.data}>
                <label>End Date: </label>
                <span>{dayjs(anime.attributes.endDate).format('MMMM D, YYYY')}</span>
              </div>
              <div className={styles.data}>
                <label>Status: </label>
                <span>{anime.attributes.status}</span>
              </div>
              <div className={styles.data}>
                <label>Number of Episodes: </label>
                <span>{anime.attributes.episodeCount}</span>
              </div>
              <div className={styles.data}>
                <label>Age Rating: </label>
                <span>{anime.attributes.ageRating}</span>
              </div>
              <div className={styles.data}>
                <label>Rank: </label>
                <span>{anime.attributes.popularityRank}</span>
              </div>
              <div className={styles.data}>
                <label>Rating: </label>
                <span>{anime.attributes.averageRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.episodeList}>
        <h2 className={styles.title}>Watch Here</h2>
        <Episodes id={anime.id}/>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const anime = await axios(`https://kitsu.io/api/edge/anime?filter[id]=${context.params.id}`, {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  })
    .then(res => res.data.data[0])
    .catch(err => console.error(err));

  return {
    props: {
      anime
    }
  };
}

export default anime;