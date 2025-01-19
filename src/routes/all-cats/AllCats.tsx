import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Cats } from '@components/cats/Cats';
import { getAllCatsLoader } from '@utils/loaders';
import { ICat } from '@components/cat/Cat';

export const AllCats: FC = () => {
  const { cats } = useLoaderData() as Awaited<
    ReturnType<typeof getAllCatsLoader>
  >;

  const [favoriteCats] = useState<string[]>(
    JSON.parse(localStorage.getItem('favoriteCats') ?? '[]') as string[],
  );

  const catsWithFavorites: ICat[] = cats.map((cat) => ({
    ...cat,
    isFavorite: favoriteCats.includes(cat.id),
  }));

  return <Cats cats={catsWithFavorites} />;
};
