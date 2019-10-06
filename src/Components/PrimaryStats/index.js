import React from 'react';
import { 
  Container, 
  Title, 
  Number, 
  MPaper, 
  User,
  Name,
  MAvatar
} from './styles';

function PrimaryStats({user, data}) {
  return(
    <div>
      <Name>
        <MAvatar alt="fragman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" className="my-root-class"/>
        <User>{user}</User>
      </Name>
      <Container>
        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Kills</Title>
          <Number>{data.kills}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Deaths</Title>
          <Number>{data.kills}</Number>
        </MPaper>

        <MPaper classes={{ root: 'my-root-class' }}>
          <Title>Win %</Title>
          <Number>{data.win}</Number>
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
