import type { PopulationComposition, Prefecture, Resas } from '@/types/resas';
import { useCallback, useEffect, useState } from 'react';

export type PrefPopulations = {
  pref: Prefecture;
  populations: PopulationComposition | null;
};

const cache = new Map<number, PrefPopulations>();

export default function usePrefPopulations(targetPrefs: Prefecture[]) {
  const [prefPopulations, setPrefPopulations] = useState<PrefPopulations[]>([]);

  const fetchPrefPopulation = useCallback((pref: Prefecture): PrefPopulations => {
    if (cache.has(pref.prefCode)) return cache.get(pref.prefCode)!;

    const fetching = { pref, populations: null };
    cache.set(pref.prefCode, fetching);

    fetch(`/api/resas/api/v1/population/composition/perYear?prefCode=${pref.prefCode}&cityCode=-`)
      .then((res): Promise<Resas<PopulationComposition>> => res.json())
      .then((composition) => {
        const fetched = { pref, populations: composition.result };
        cache.set(pref.prefCode, fetched);

        setPrefPopulations((prev) => {
          const index = prev.findIndex((p) => p.pref.prefCode === pref.prefCode);
          return index === -1 ? prev : prev.with(index, fetched);
        });
      });

    return fetching;
  }, []);

  useEffect(() => {
    setPrefPopulations(targetPrefs.map((pref) => fetchPrefPopulation(pref)));
  }, [fetchPrefPopulation, targetPrefs]);

  return prefPopulations;
}
