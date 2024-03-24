import type { Prefecture } from '@/types/resas';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useMemo, useState } from 'react';
import usePrefPopulations from '../_hooks/usePrefPopulations';

type Props = {
  selectedPrefectures: Prefecture[];
};

export default function MainCharts(props: Props) {
  const { selectedPrefectures } = props;
  const [labelMode] = useState('総人口');
  const prefPopulations = usePrefPopulations(selectedPrefectures);

  const series: Highcharts.SeriesOptionsType[] = useMemo(
    () =>
      prefPopulations.flatMap(
        ({ pref, populations }) =>
          populations?.data
            .filter((v) => v.label === labelMode)
            .map((targetData) => ({
              type: 'line',
              name: pref.prefName,
              data: targetData.data.map((d) => [d.year, d.value]),
              zoneAxis: 'x',
              zones: [{ value: populations.boundaryYear }, { dashStyle: 'Dot' }],
            })) ?? []
      ),
    [labelMode, prefPopulations]
  );

  const options: Highcharts.Options = {
    title: { text: labelMode },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
