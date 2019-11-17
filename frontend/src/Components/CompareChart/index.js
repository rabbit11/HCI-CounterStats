import React from 'react';
import { 
  Container, 
  MAvatar, 
  User,
  Name,
  NameContainer,
  StatContainer,
  Data,
  Title
} from './styles';

function CompareChart({player1, player2}) {
  const { adr, kdr, hs, mvps, name, pic } = player1;
  const { adr: adr2, kdr: kdr2, hs: hs2, mvps: mvps2, name: name2, pic: pic2 } = player2;

  return(
    <Container>
      <NameContainer>
        <Name>
          <MAvatar alt="fragman" src={pic} className="my-root-class"/>
          <User>{name}</User>
        </Name>

        <Name>
          <MAvatar alt="fragman" src={pic2} className="my-root-class"/>
          <User>{name2}</User>
        </Name>
      </NameContainer>

      <StatContainer>
        {Math.max(kdr, kdr2) === kdr 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{kdr}</p> 
          : <Data>{kdr}</Data>}
        <Title>KDR</Title>
        {Math.max(kdr, kdr2) === kdr2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{kdr2}</p> 
          : <Data>{kdr2}</Data>}
      </StatContainer>

      <StatContainer>
        {Math.max(adr, adr2) === adr 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{adr}</p> 
          : <Data>{adr}</Data>}
        <Title>ADR</Title>
        {Math.max(adr, adr2) === adr2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{adr2}</p> 
          : <Data>{adr2}</Data>}
      </StatContainer>

      <StatContainer>
        {Math.max(mvps, mvps2) === mvps 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{mvps}</p> 
          : <Data>{mvps}</Data>}
        <Title>MVPs</Title>
        {Math.max(mvps, mvps2) === mvps2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{mvps2}</p> 
          : <Data>{mvps2}</Data>}
      </StatContainer>

      <StatContainer>
        {Math.max(hs, hs2) === hs 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{hs}</p> 
          : <Data>{hs}</Data>}
        <Title>HS</Title>
        {Math.max(hs, hs2) === hs2 
          ? <p style={{color: 'orange', fontWeight: 'bold'}}>{hs2}</p> 
          : <Data>{hs2}</Data>}
      </StatContainer>
      
    </Container>
  )
};

export default CompareChart;
