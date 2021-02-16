import styles from '../styles/EpisodeList.module.css';

const EpisodeList = ({episode}) => {
  return (
    <div>
      <div className={styles.episode_title}>
        Episode {episode.attributes.number}: <span>{episode.attributes.canonicalTitle}</span>
      </div>
      <div className={styles.episode_container}>
        {episode.attributes.thumbnail ? <img className={styles.episode_image} src={episode.attributes.thumbnail.original}></img> : null}
        <div>{episode.attributes.synopsis}</div>
      </div>
    </div>
  );
}

export default EpisodeList;