import {useState} from 'react';
import styles from '../styles/EpisodeList.module.css';

const EpisodeList = ({episode, anime}) => {
  // const [hover, setHover] = useState(false);

  // let handleHover = () => {
  //   setHover(prev => !prev);
  // };
  // onMouseEnter={e => handleHover()} onMouseLeave={e => handleHover()}
  return (
    <div className={styles.episodes}>
      <div className={styles.episode_title}>
        {anime.attributes.titles.en_jp} Episode {episode.attributes.number}
        {episode.attributes.canonicalTitle ? <span>: {episode.attributes.canonicalTitle}</span> : null}
      </div>
      <div className={styles.episode_container}>
        {episode.attributes.thumbnail ? <img className={styles.episode_image} src={episode.attributes.thumbnail.original}></img> : null}
        {/* {hover && <div className={styles.synopsis}>{episode.attributes.synopsis}</div>} */}
      </div>
    </div>
  );
}

export default EpisodeList;