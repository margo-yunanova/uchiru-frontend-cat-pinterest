import { createContext } from 'react';

export const BASE_URL = 'https://api.thecatapi.com/v1';

export const FavoriteCatsContext = createContext<{
  favoriteCats: string[];
  setFavoriteCats: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  favoriteCats: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFavoriteCats: () => {},
});
