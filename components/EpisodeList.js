import styles from '../styles/EpisodeList.module.css';

const EpisodeList = ({episode}) => {
  console.log(episode);
  return (
    <div>
      <div class={styles.episode_title}>
        Episode {episode.attributes.number}: <span>{episode.attributes.canonicalTitle}</span>
      </div>
      <div className={styles.episode_container}>
        <img className={styles.episode_image} src={episode.attributes.thumbnail.original}></img>
        <div>{episode.attributes.synopsis}</div>
      </div>
    </div>
  );
}

export default EpisodeList;