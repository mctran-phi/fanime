import styles from '../styles/Search.module.css';

const Search = ({handleChange, handleClear, search}) => {
  let clearQuery = () => {
    document.getElementsByClassName(styles.search)[0].value = '';
    handleClear();
  };

  return (
    <div className={styles.search}>
      <img className={styles.glass} src='/search.svg'></img>
      <input className={styles.search_bar} type='text' placeholder='Search an anime...' onChange={e => handleChange(e.target.value)}></input>
      {search.length > 0 && <img className={styles.clear} onClick={e => clearQuery()} src='/clear.svg'></img>}
    </div>
  );
}

export default Search;