import React from 'react';
import { 
  Bar,
  BarChart,
  BarSeries, 
  BarLabel,
  LinearXAxis, 
  LinearYAxis, 
  LinearYAxisTickSeries
} from 'reaviz';
import { Container, Title } from './styles'

function BarStats({ data, title, color }) {
  return(
    <Container>
      <Title>{title}</Title>
      <BarChart
        width={500}
        height={350}
        data={data}
        xAxis={<LinearXAxis type="value" />}
        yAxis={
          <LinearYAxis
            type="category"
            tickSeries={<LinearYAxisTickSeries tickSize={100} />}
          />
        }
        series={
          <BarSeries
            colorScheme={color}
            layout="horizontal"
            bar={<Bar label={<BarLabel fill={''} />} />}
            // bar={<Bar rounded={true} fill={'#000'} position={'top'}/>}
          />
        }
      />
    </Container>
  )
};

export default BarStats;
