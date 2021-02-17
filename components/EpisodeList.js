import styles from '../styles/EpisodeList.module.css';

const EpisodeList = ({episode, anime}) => {
  return (
    <div className={styles.episodes}>
      <div className={styles.episode_title}>
        {anime.attributes.titles.en_jp} Episode {episode.attributes.number}
        {episode.attributes.canonicalTitle ? <span>: {episode.attributes.canonicalTitle}</span> : null}
      </div>
      <div className={styles.episode_container}>
        {episode.attributes.thumbnail ? <img className={styles.episode_image} src={episode.attributes.thumbnail.original}></img> : null}
        {/* <div>{episode.attributes.synopsis}</div> */}
      </div>
    </div>
  );
}

export default EpisodeList;