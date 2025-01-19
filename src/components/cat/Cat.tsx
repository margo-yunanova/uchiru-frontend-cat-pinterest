import { FC, useContext, useState } from 'react';

import { FavoriteCatsContext } from '@utils/constants';

import { LikeIcon } from '../icons/LikeIcon';
import { LikedIcon } from '../icons/LikedIcon';

import styles from './cat.module.css';
import { ICat } from './Cat.props';

export const Cat: FC<ICat> = ({
  url,
  alt = 'Фотография котика',
  isFavorite,
  id,
}) => {
  const { setFavoriteCats } = useContext(FavoriteCatsContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleLike = (id: string) => {
    if (isFavorite) {
      setFavoriteCats((prev) => {
        const newFavoriteCats = prev.filter((catId) => catId !== id);
        localStorage.setItem('favoriteCats', JSON.stringify(newFavoriteCats));
        return newFavoriteCats;
      });
    }

    if (!isFavorite) {
      setFavoriteCats((prev) => {
        const newFavoriteCats = [...prev, id];
        localStorage.setItem('favoriteCats', JSON.stringify(newFavoriteCats));
        return newFavoriteCats;
      });
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => toggleLike(id)}
    >
      <img src={url} alt={alt} className={styles.image} />
      {!isFavorite && isHovered && <LikeIcon classNames={styles.heart} />}
      {isFavorite && <LikedIcon classNames={styles.heart} />}
    </div>
  );
};
