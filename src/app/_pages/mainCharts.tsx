import { Resas, PopulationComposition } from '@/types/resas';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

type Props = {
  selectedPrefCodes: number[];
};

type PopulationData = {
  prefCode: number;
  composition: Resas<PopulationComposition>;
};
const cache = new Map<number, Promise<PopulationData>>();

export default function MainCharts(props: Props) {
  const { selectedPrefCodes } = props;
  const [labelMode] = useState('総人口');
  const [series, setSeries] = useState<Highcharts.SeriesOptionsType[]>([]);

  useEffect(() => {
    (async () => {
      const fetchers = selectedPrefCodes.map((prefCode) => {
        if (cache.has(prefCode)) return cache.get(prefCode)!;
        const dataPromise = fetch(`/api/resas/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`)
          .then((res): Promise<Resas<PopulationComposition>> => res.json())
          .then((composition) => ({ prefCode, composition }));
        cache.set(prefCode, dataPromise);
        return dataPromise;
      });

      const results = await Promise.all(fetchers);
      const series = results.flatMap((data): Highcharts.SeriesOptionsType[] => {
        const targetData = data.composition.result.data.find((v) => v.label === labelMode);
        return targetData
          ? [
              {
                type: 'line',
                name: data.prefCode.toString(),
                data: targetData.data.map((d) => [d.year, d.value]),
                zoneAxis: 'x',
                zones: [{ value: data.composition.result.boundaryYear }, { dashStyle: 'Dot' }],
              },
            ]
          : [];
      });
      setSeries(series);
    })();
  }, [labelMode, selectedPrefCodes]);

  const options: Highcharts.Options = {
    title: { text: labelMode },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
