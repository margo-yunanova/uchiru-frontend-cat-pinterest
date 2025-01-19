import { FC, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Cats } from '@components/cats/Cats';
import { getAllCatsLoader } from '@utils/loaders';
import { FavoriteCatsContext } from '@utils/constants';
import { ICat } from '@components/cat/Cat';

export const AllCats: FC = () => {
  const { cats } = useLoaderData() as Awaited<
    ReturnType<typeof getAllCatsLoader>
  >;

  const { favoriteCats } = useContext(FavoriteCatsContext);

  const catsWithFavorites: ICat[] = cats.map((cat) => ({
    ...cat,
    isFavorite: favoriteCats.includes(cat.id),
  }));

  return <Cats cats={catsWithFavorites} />;
};
