import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Panel.module.css';

const Panel = ({ handleSelect }) => {
  return (
    <div className={styles.body}>
      <div>
        <h4>Search Anime by Genres</h4>
        <ul>
          <li onClick={e => handleSelect(e.target.innerText)}>Action</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Adventure</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Comedy</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Drama</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Slice of Life</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Fantasy</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Magic</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Horror</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Mystery</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Psychological</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Romance</li>
          <li onClick={e => handleSelect(e.target.innerText)}>Sci-Fi</li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;