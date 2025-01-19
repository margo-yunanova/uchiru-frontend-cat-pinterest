import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Cats } from '@components/cats/Cats';
import { getFavoriteCatsLoader } from '@utils/loaders';

export const FavoriteCats: FC = () => {
  const { favoriteCats } = useLoaderData() as Awaited<
    ReturnType<typeof getFavoriteCatsLoader>
  >;

  return <Cats cats={favoriteCats} />;
};
