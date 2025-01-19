import { getAllCats, getFavoriteCats } from '@utils/api';

export async function getAllCatsLoader() {
  const cats = await getAllCats();

  return { cats };
}

export async function getFavoriteCatsLoader() {
  const cats = await getFavoriteCats();

  return { cats };
}
