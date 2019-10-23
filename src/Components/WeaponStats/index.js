import React from 'react';
// import { 
//   Container, 
//   Title, 
//   Number, 
//   MPaper, 
//   User,
//   Name,
//   MAvatar,
// } from './styles';
import { 
  BarChart,
  BarSeries, 
  LinearXAxis, 
  LinearYAxis, 
  LinearYAxisTickSeries,
  Bar
} from 'reaviz';

function WeaponStats() {
  return(
    <BarChart
      width={500}
      height={350}
      data={
        [
          {
            key: "AK-47",
            data: 29708
          },
          {
            key: "AWP",
            data: 13111
          },
          {
            key: "M4A4",
            data: 6903
          }
        ]
      }
      xAxis={<LinearXAxis type="value" />}
      yAxis={
        <LinearYAxis
          type="category"
          tickSeries={<LinearYAxisTickSeries tickSize={30000} />}
        />
      }
      series={
        <BarSeries
          colorScheme={'#fff'}
          layout="horizontal"
          padding={0.1}
          bar={<Bar rounded={true} gradient={true} />}
        />
      }
    />
  )
};

export default WeaponStats;
