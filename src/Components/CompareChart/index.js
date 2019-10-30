import React from 'react';
import { 
  Container, 
  MAvatar, 
  User,
  Name,
  NameContainer,
  StatContainer
} from './styles';

function CompareChart({player1, player2}) {
  const { adr, kdr, hs, mvps } = player1;
  const { adr: adr2, kdr: kdr2, hs: hs2, mvps: mvps2 } = player2;

  return(
    <Container>
      <NameContainer>
        <Name>
          <MAvatar alt="fragman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" className="my-root-class"/>
          <User>{player1.name}</User>
        </Name>

        <Name>
          <MAvatar alt="fragman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" className="my-root-class"/>
          <User>{player2.name}</User>
        </Name>
      </NameContainer>

      <StatContainer>
        {Math.max(kdr, kdr2) === kdr 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{kdr}</p> 
          : <p>{kdr}</p>}
        <h1>KDR</h1>
        {Math.max(kdr, kdr2) === kdr2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{kdr2}</p> 
          : <p>{kdr2}</p>}
      </StatContainer>

      <StatContainer>
        {Math.max(adr, adr2) === adr 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{adr}</p> 
          : <p>{adr}</p>}
        <h1>ADR</h1>
        {Math.max(adr, adr2) === adr2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{adr2}</p> 
          : <p>{adr2}</p>}
      </StatContainer>

      <StatContainer>
        {Math.max(mvps, mvps2) === mvps 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{mvps}</p> 
          : <p>{mvps}</p>}
        <h1>MVPs</h1>
        {Math.max(mvps, mvps2) === mvps2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{mvps2}</p> 
          : <p>{mvps2}</p>}
      </StatContainer>

      <StatContainer>
        {Math.max(hs, hs2) === hs 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{hs}</p> 
          : <p>{hs}</p>}
        <h1>ADR</h1>
        {Math.max(hs, hs2) === hs 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{hs}</p> 
          : <p>{hs2}</p>}
      </StatContainer>
      
    </Container>
  )
};

export default CompareChart;
