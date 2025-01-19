import { getAllCats, getFavoriteCats } from '@utils/api';

export async function getAllCatsLoader() {
  const cats = await getAllCats();

  return { cats };
}

export async function getFavoriteCatsLoader() {
  const response = await getFavoriteCats();

  const favoriteCats = response.map((cat) => ({
    ...cat,
    isFavorite: true,
  }));

  return { favoriteCats };
}
