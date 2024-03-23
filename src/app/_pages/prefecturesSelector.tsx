'use client';

import type { Prefectures } from '@/types/rasas';
import type { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';

type Props = {
  prefectures: Prefectures;
  setSelectedPrefCodes: Dispatch<SetStateAction<number[]>>;
};

export default function PrefecturesSelector(props: Props) {
  const { prefectures, setSelectedPrefCodes } = props;

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const prefCode = Number(e.target.value);
      const isChecked = e.target.checked;

      setSelectedPrefCodes((prev) => {
        const filterd = prev.filter((code) => code !== prefCode);
        if (isChecked) filterd.push(prefCode);
        return filterd;
      });
    },
    [setSelectedPrefCodes]
  );

  return (
    <section>
      {prefectures.map(({ prefCode, prefName }) => (
        <label key={prefCode}>
          <input type="checkbox" onChange={onChange} value={prefCode} />
          {prefName}
        </label>
      ))}
    </section>
  );
}
