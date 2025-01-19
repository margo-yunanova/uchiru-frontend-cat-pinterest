import { BASE_URL } from './constants';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));

interface CatResponse {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
}

export type TCats = CatResponse[];

export const getAllCats = async (
  page = 0,
  limit = 15,
): Promise<CatResponse[]> => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(
    `${BASE_URL}/images/search?${params.toString()}`,
  );

  return checkResponse(response);
};

export const getCatById = async (id: string): Promise<CatResponse> => {
  const response = await fetch(`${BASE_URL}/images/${id}`);

  return checkResponse(response);
};

export const getFavoriteCats = async (): Promise<CatResponse[]> => {
  const favoriteCats = JSON.parse(
    localStorage.getItem('favoriteCats') ?? '[]',
  ) as string[];

  const response = await Promise.all(favoriteCats.map(getCatById));

  return response;
};
