'use client';

import type { Prefectures } from '@/types/rasas';
import PrefecturesSelector from './prefecturesSelector';
import styles from './main.module.css';
import { useState } from 'react';

type Props = {
  prefectures: Prefectures;
};

export default function Main(props: Props) {
  const { prefectures } = props;
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <PrefecturesSelector prefectures={prefectures} setSelectedPrefCodes={setSelectedPrefCodes} />
        <div>{selectedPrefCodes.toString()}</div>
      </div>
    </main>
  );
}
