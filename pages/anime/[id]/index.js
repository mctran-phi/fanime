import axios from 'axios'
import styles from '../../../styles/AnimeDescription.module.css';

const anime = ({anime}) => {
  const {data}= anime;
  console.log(anime);
  return (
    <div>
      <div>
        <h2>{anime.attributes.titles.en_jp}</h2>
        <div>
          <img src={anime.attributes.posterImage.medium}></img>
          <div>
            <div>{anime.attributes.description}</div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div>

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