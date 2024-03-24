'use client';

import type { Prefecture } from '@/types/resas';
import type { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';

type Props = {
  prefectures: Prefecture[];
  setSelectedPrefectures: Dispatch<SetStateAction<Prefecture[]>>;
};

export default function PrefecturesSelector(props: Props) {
  const { prefectures, setSelectedPrefectures } = props;
  const prefecturesMap = Object.fromEntries(prefectures.map((pref) => [pref.prefCode, pref]));

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const prefCode = Number(e.target.value);
      const isChecked = e.target.checked;

      setSelectedPrefectures((prev) => {
        const filterd = prev.filter((pref) => pref.prefCode !== prefCode);
        if (isChecked) filterd.push(prefecturesMap[prefCode]);
        return filterd;
      });
    },
    [prefecturesMap, setSelectedPrefectures]
  );

  return (
    <section>
      {prefectures.map(({ prefCode, prefName }, i) => (
        <label key={prefCode}>
          <input type="checkbox" onChange={onChange} value={prefCode} />
          {prefName}
        </label>
      ))}
    </section>
  );
}
