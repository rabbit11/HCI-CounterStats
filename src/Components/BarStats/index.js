import React from 'react';
import { 
  Bar,
  BarChart,
  BarSeries, 
  BarLabel,
  LinearXAxis, 
  LinearYAxis, 
  LinearYAxisTickSeries,
  LinearXAxisTickLabel
} from 'reaviz';
import { 
  Container, 
  Title, 
  ChartContainer 
} from './styles';

function BarStats({ data, title, color }) {
  return(
    <Container>
      <Title>{title}</Title>
      <ChartContainer>
        <BarChart
          width={500}
          height={350}
          data={data}
          xAxis={<LinearXAxis type="value" />}
          yAxis={
            <LinearYAxis
              type="category"
              tickSeries={<LinearYAxisTickSeries tickSize={100} label={<LinearXAxisTickLabel fontSize={13} padding={3}/>} />}
            />
          }
          series={
            <BarSeries
              colorScheme={color}
              layout="horizontal"
              bar={<Bar width={60} label={<BarLabel fill={'#fff'}/>} />}
              // bar={<Bar rounded={true} fill={'#000'} position={'top'}/>}
            />
          }
        />
      </ChartContainer>
    </Container>
  )
};

export default BarStats;
