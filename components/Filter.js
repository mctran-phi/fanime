import styles from '../styles/Filter.module.css';

const Filter = ({handleSelect}) => {
  let handleChange = e => {
    handleSelect(e);
  };

  return (
    <div className={styles.container}>
      <select onChange={e => handleChange(e.target.value)}>
        <option value='0'>All Anime</option>
        <option value='1'>Popular Anime</option>
        <option value='2'>Recently Updated</option>
      </select>
    </div>
  );
};

export default Filter;