import { FC } from 'react';

import { Cat, ICat } from '../cat/Cat';

import styles from './cats.module.css';

interface ICats {
  cats: ICat[];
}

export const Cats: FC<ICats> = ({ cats }) => {
  return (
    <ul className={styles.cats}>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Cat {...cat} />
        </li>
      ))}
    </ul>
  );
};
