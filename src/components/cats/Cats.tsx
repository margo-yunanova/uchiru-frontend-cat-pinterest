import { FC } from 'react';

import { Cat } from '../cat/Cat';

import styles from './cats.module.css';
import { ICats } from './Cats.props';

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
