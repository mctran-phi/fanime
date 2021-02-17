import styles from '../styles/Search.module.css';

const Search = ({handleChange, handleClear}) => {
  let clearQuery = () => {
    document.getElementsByClassName(styles.search)[0].value = '';
    handleClear();
  };

  return (
    <div className={styles.search_bar}>
      <input className={styles.search} type='text' placeholder='Search for an anime...' onChange={e => handleChange(e.target.value)}></input>
      <button onClick={e => clearQuery()}>Clear</button>
    </div>
  );
}

export default Search;