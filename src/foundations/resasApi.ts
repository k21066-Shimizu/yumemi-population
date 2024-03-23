import 'server-only';

import { FetchResasApi } from '@/types/resas';

const ENDPOINT = 'https://opendata.resas-portal.go.jp/';

export const fetchResasApi: FetchResasApi = async (path) => {
  const response = await fetch(new URL(path, ENDPOINT), {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.RESAS_API_KEY!,
    },
  });
  return response.json();
};
