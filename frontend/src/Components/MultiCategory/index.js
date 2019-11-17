import React from 'react';
import {
  BarChart,
  BarSeries,
  LinearXAxis,
  LinearYAxis,
  LinearYAxisTickSeries
} from 'reaviz';


const MultiCategory = ({ data }) => (
  <div style={{marginRight: '40px'}}>
    <BarChart
      width={600}
      height={350}
      data={data}
      xAxis={<LinearXAxis type="value" />}
      yAxis={
        <LinearYAxis
          type="category"
          tickSeries={<LinearYAxisTickSeries tickSize={20} />}
        />
      }
      series={
        <BarSeries
          layout="horizontal"
          type="grouped"
          // colorScheme={chroma
          //   .scale(['ACB7C9', '418AD7'])
          //   .colors(2)}
          padding={0.8}
        />
      }
    />
  </div>
)

export default MultiCategory;