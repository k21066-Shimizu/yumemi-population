import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

type Props = {
  selectedPrefCodes: number[];
};

export default function MainCharts(props: Props) {
  const { selectedPrefCodes } = props;
  const options: Highcharts.Options = {
    title: {
      text: 'My chart',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
