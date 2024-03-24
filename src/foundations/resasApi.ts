import 'server-only';

import { FetchResasApi } from '@/types/resas';

const ENDPOINT = 'https://opendata.resas-portal.go.jp/';

export const fetchResasApi: FetchResasApi = async (path, params = {}) => {
  const url = new URL(path, ENDPOINT);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.RESAS_API_KEY!,
    },
  });
  return response.json();
};
