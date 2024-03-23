import 'server-only';

import { FetchRasasApi } from '@/types/rasas';

const ENDPOINT = 'https://opendata.resas-portal.go.jp/';

export const fetchRasasApi: FetchRasasApi = async (path) => {
  const response = await fetch(new URL(path, ENDPOINT), {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.RASAS_API_KEY!,
    },
  });
  return response.json();
};
