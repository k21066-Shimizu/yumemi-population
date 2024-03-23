'use client';

import type { Prefectures } from '@/types/rasas';
import PrefecturesSelector from './prefecturesSelector';
import styles from './main.module.css';

type Props = {
  data: Prefectures;
};

export default function Main(props: Props) {
  const { data } = props;

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <PrefecturesSelector prefectures={data} />
      </div>
    </main>
  );
}
