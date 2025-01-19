import { createContext } from 'react';

export const tabNames = [
  { name: 'Все котики', url: '/' },
  { name: 'Любимые котики', url: '/favorites' },
];

export const BASE_URL = 'https://api.thecatapi.com/v1';

export const FavoriteCatsContext = createContext<{
  favoriteCats: string[];
  setFavoriteCats: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  favoriteCats: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFavoriteCats: () => {},
});
