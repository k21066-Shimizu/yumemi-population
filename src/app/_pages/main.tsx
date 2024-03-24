'use client';

import type { Prefecture } from '@/types/resas';
import PrefecturesSelector from './prefecturesSelector';
import styles from './main.module.css';
import { useState } from 'react';
import MainCharts from './mainCharts';

type Props = {
  prefectures: Prefecture[];
};

export default function Main(props: Props) {
  const { prefectures } = props;
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);

  return (
    <main className={styles.main}>
      <PrefecturesSelector prefectures={prefectures} setSelectedPrefectures={setSelectedPrefectures} />
      <MainCharts selectedPrefectures={selectedPrefectures} />
    </main>
  );
}
