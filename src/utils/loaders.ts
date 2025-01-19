import { getAllCats } from '@utils/api';

export async function getAllCatsLoader() {
  const cats = await getAllCats();

  return { cats };
}
