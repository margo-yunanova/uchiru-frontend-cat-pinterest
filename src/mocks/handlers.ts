import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@utils/constants';

import database from './db';

export const handlers = [
  http.get(`${BASE_URL}/images/search`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') ?? 0;
    const limit = url.searchParams.get('limit') ?? 15;

    const firstIndex = +page * +limit;
    const response = database.slice(firstIndex, firstIndex + +limit);
    return HttpResponse.json(response);
  }),
];
