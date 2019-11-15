import React from 'react';
import { 
  BarChart,
  BarSeries
} from 'reaviz';

function compare(a, b) {
  const keyA = a.data;
  const keyB = b.data;

  let comparison = 0;
  if(keyA > keyB) {
    comparison = -1;
  } else if(keyB > keyA) {
    comparison = 1;
  } 

  return comparison;
}

function Histogram({ data }) {
  data.sort(compare);

  return (
    <BarChart
      width={700}
      height={350}
      data={data}
      series={<BarSeries colorScheme={'orange'} />}
    />
  );
}

export default Histogram;