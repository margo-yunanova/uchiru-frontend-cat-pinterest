import { FC, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Cats } from '@components/cats/Cats';
import { getFavoriteCatsLoader } from '@utils/loaders';
import { FavoriteCatsContext } from '@utils/constants';
import { ICat } from '@components/cat/Cat.props';

export const FavoriteCats: FC = () => {
  const { cats } = useLoaderData() as Awaited<
    ReturnType<typeof getFavoriteCatsLoader>
  >;
  const { favoriteCats } = useContext(FavoriteCatsContext);

  const catsWithFavorites: ICat[] = cats
    .map((cat) => ({
      ...cat,
      isFavorite: favoriteCats.includes(cat.id),
    }))
    .filter((cat) => cat.isFavorite);

  return <Cats cats={catsWithFavorites} />;
};
