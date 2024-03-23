'use client';

import type { Prefectures } from '@/types/rasas';

type Props = {
  prefectures: Prefectures;
};

export default function PrefecturesSelector(props: Props) {
  const { prefectures } = props;

  return (
    <section>
      {prefectures.map((prefecture) => (
        <span key={prefecture.prefCode}>{prefecture.prefName}</span>
      ))}
    </section>
  );
}
