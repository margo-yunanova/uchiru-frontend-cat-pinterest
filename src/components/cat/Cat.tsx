import { FC, useState } from 'react';

import { LikeIcon } from '../icons/LikeIcon';
import { LikedIcon } from '../icons/LikedIcon';

import styles from './cat.module.css';

export interface ICat {
  alt?: string;
  isFavorite: boolean;
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

export const Cat: FC<ICat> = ({
  url,
  alt = 'Фотография котика',
  isFavorite,
}) => {
  const [isHeartShown, setIsHeartShown] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const addToFavorites = () => {};

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        if (isFavorite) {
          setIsHeartHovered(true);
        } else {
          setIsHeartShown(true);
        }
      }}
      onMouseLeave={() => {
        if (isFavorite) {
          setIsHeartHovered(false);
        } else {
          setIsHeartShown(false);
        }
      }}
    >
      <img src={url} alt={alt} className={styles.image} />
      {isHeartShown && (
        <LikeIcon
          onMouseEnter={() => {
            setIsHeartShown(false);
            setIsHeartHovered(true);
          }}
          classNames={styles.heart}
        />
      )}
      {isHeartHovered && (
        <LikedIcon
          onMouseLeave={() => setIsHeartHovered(false)}
          onClick={addToFavorites}
          classNames={styles.heart}
        />
      )}
    </div>
  );
};
