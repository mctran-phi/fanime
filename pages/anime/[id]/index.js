import { useEffect, useState } from 'react';
import axios from 'axios'
import dayjs from 'dayjs';
import styles from '../../../styles/AnimeDescription.module.css';

const anime = ({ anime }) => {
  console.log(anime);
  return (
    <div>
      <div>
        <h2 className={styles.title}>{anime.attributes.titles.en_jp}</h2>
        <div className={styles.container}>
          <img className={styles.image} src={anime.attributes.posterImage.small}></img>
          <div className={styles.info}>
            <div className={styles.description}>{anime.attributes.description}</div>
            <ul>
              <li>Start Date: {dayjs(anime.attributes.startDate).format('MMMM D, YYYY')}</li>
              <li>End Date: {anime.attributes.endDate ? dayjs(anime.attributes.endDate).format('MMMM D, YYYY') : null}</li>
              <li>Status: {anime.attributes.status}</li>
              <li>Number of Episodes: {anime.attributes.episodeCount}</li>
              <li>Episode Length: {anime.attributes.episodeLength} minutes</li>
              <li>Age Rating: {anime.attributes.ageRating}</li>
              <li>Popularity: {anime.attributes.popularityRank}</li>
              <li>Rating: {anime.attributes.averageRating}</li>
              <li>Rating Rank: {anime.attributes.ratingRank}</li>
            </ul>
          </div>
        </div>
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