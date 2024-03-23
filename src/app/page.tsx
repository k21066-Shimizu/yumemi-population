import { fetchRasasApi } from '@/foundations/rasasApi';
import Main from './_pages/main';

export default async function Home() {
  const data = await fetchRasasApi('api/v1/prefectures');

  return <Main prefectures={data.result} />;
}
