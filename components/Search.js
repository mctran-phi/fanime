import styles from '../styles/Search.module.css';

const Search = () => {
  return (
    <div className={styles.search_bar}>
      <input className={styles.search} type='text' placeholder='Search for an anime...'></input>
    </div>
  );
}

export default Search;