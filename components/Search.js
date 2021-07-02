import styles from '../styles/Search.module.css';

const Search = ({ handleSearch, handleClear, query }) => {
  var clearQuery = () => {
    document.getElementsByClassName(styles.search_bar)[0].value = '';
    handleClear();
  };

  return (
    <div className={styles.search}>
      <img className={styles.glass} src='/search.svg'></img>
      <input className={styles.search_bar} type='text' value={query} placeholder='Search an anime...' onChange={e => handleSearch(e.target.value)}></input>
      {query.length > 0 && <img className={styles.clear} onClick={e => clearQuery()} src='/clear.svg'></img>}
    </div>
  );
}

export default Search;