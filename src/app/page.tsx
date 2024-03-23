import { fetchResasApi } from '@/foundations/resasApi';
import Main from './_pages/main';

export default async function Home() {
  const data = await fetchResasApi('api/v1/prefectures');

  return <Main prefectures={data.result} />;
}
