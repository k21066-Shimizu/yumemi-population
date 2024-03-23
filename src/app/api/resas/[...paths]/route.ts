import { fetchResasApi } from '@/foundations/resasApi';

const API_ENDPOINT = 'https://opendata.resas-portal.go.jp/api/';

export async function GET(request: Request, { params }: { params: { paths: string[] } }) {
  const path = params.paths.join('/');
  const result = await fetchResasApi(path);

  return Response.json(result);
}
