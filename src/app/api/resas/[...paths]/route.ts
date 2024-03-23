import { fetchResasApi } from '@/foundations/resasApi';

export async function GET(request: Request, { params }: { params: { paths: string[] } }) {
  const { paths } = params;
  const { searchParams } = new URL(request.url);
  const path = paths.join('/');
  const result = await fetchResasApi(path, Object.fromEntries(searchParams));

  return Response.json(result);
}
