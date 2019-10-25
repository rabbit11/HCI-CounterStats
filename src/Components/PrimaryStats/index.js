import React from 'react';
import { 
  Container, 
  Title, 
  Number, 
  MPaper, 
  User,
  Name,
  MAvatar,
} from './styles';
import { RadialGauge, RadialGaugeSeries } from 'reaviz';
import ak47 from '../../assets/svg_normal/weapon_ak47.svg'

function PrimaryStats({user, data}) {
  return(
    <div>
      <Name>
        <MAvatar alt="fragman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" className="my-root-class"/>
        <User>{user}</User>
      </Name>

      <RadialGauge 
        data={[
          {
            key: "K/D Ratio",
            data: (data.kills/data.deaths).toFixed(3) 
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
      
      <Container>
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
      </Container>
    </div>
  )
};

export default PrimaryStats;
