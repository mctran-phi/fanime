const AnimeItem = ({anime}) => {
  return (
    <div>
      <img src={anime.posterImage.tiny}></img>
      <p>{anime.titles.en_jp}</p>
    </div>
  );
}

export default AnimeItem;