import styles from '../styles/Filter.module.css';

const Filter = ({ handleSelect }) => {
  var handleChange = e => {
    handleSelect(e);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.drop}>Sort By:</div>
      <div className={styles.content}>
        <div onClick={e => handleChange('0')}>Anime Id</div>
        <div onClick={e => handleChange('1')}>Popular Anime</div>
        <div onClick={e => handleChange('2')}>Recently Updated</div>
      </div>
    </div>
  );
};

export default Filter;