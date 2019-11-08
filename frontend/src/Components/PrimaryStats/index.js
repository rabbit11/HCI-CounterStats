import React from 'react';
import { 
  Container,
  StatsContainer, 
  Title, 
  Number, 
  MPaper,
} from './styles';
import { RadialGauge, RadialGaugeSeries } from 'reaviz';

function PrimaryStats({data}) {
  return(
    <Container>
      <StatsContainer>
        <RadialGauge 
          data={[
            {
              key: "K/D Ratio",
              data: (data.kills/data.deaths)
            },
          ]} 
          width={200}
          height={250}
          maxValue={2}
          series={<RadialGaugeSeries minGaugeWidth={150} colorScheme={'#CE003E'} />} 
        />

        <RadialGauge 
          data={[
            {
              key: "W/L Ratio %",
              data: data.win
            },
          ]} 
          width={200}
          height={250}
          maxValue={100}
          series={<RadialGaugeSeries minGaugeWidth={150} colorScheme={'#DF8D03'} />} 
        />

        <RadialGauge 
          data={[
            {
              key: "Accuracy %",
              data: data.acc
            },
          ]} 
          width={200}
          height={250}
          maxValue={100}
          series={<RadialGaugeSeries minGaugeWidth={150} colorScheme={'#00ECB1'} />} 
        />
      </StatsContainer>

      <StatsContainer>
        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Kills</Title>
          <Number>{data.kills}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Deaths</Title>
          <Number>{data.deaths}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Wins</Title>
          <Number>{data.wins}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Damage</Title>
          <Number>{data.damage}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Time Played</Title>
          <Number>{(data.time / 3600).toFixed(1)} hrs</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>MVPs</Title>
          <Number>{data.mvps} </Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Headshots</Title>
          <Number>{data.hs} </Number>
        </MPaper>
      </StatsContainer>
    </Container>
  )
};

export default PrimaryStats;
