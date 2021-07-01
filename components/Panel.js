import axios from 'axios';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from '../styles/Panel.module.css';

const Panel = () => {
  return (
    <div className={styles.body}>
      <div>
        <h4>Search Anime by Genres</h4>
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Slice of Life</li>
          <li>Fantasy</li>
          <li>Magic</li>
          <li>Horror</li>
          <li>Mystery</li>
          <li>Psychological</li>
          <li>Romance</li>
          <li>Sci-Fi</li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;