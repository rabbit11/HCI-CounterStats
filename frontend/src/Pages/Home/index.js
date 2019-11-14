import React, { useState } from 'react'
import { Hero, Section } from 'react-landing-page';
import PrimaryStats from '../../Components/PrimaryStats'
import BarStats from '../../Components/BarStats';
import CompareChart from '../../Components/CompareChart';
import { 
  Title, 
  Subtitle, 
  Search, 
  MButton, 
  ScrollDown,
  FlexContainer,
  SectionBG,
  TitleContainer,
  User,
  MAvatar,
  Name
} from './styles';
 
export default function Home(props) {
  const [playername, setPlayerName] = useState("")
  const { history } = props;

  return(
    <div>
      <Hero
        color="black"
        bg="white"
        bgOpacity={0.1}
        backgroundImage="https://steamcdn-a.akamaihd.net/apps/csgo/images/inferno/mid1-2.jpg?v=1"
      >
          <TitleContainer>
            <Title fontSize={[60]}>Counter Stats -</Title>
            <Subtitle fontSize={[30]}>Data visualization for player statistics</Subtitle>
            <Search 
              id="standard-search"
              label="Enter your Steam ID"
              type="search"
              margin="normal"
              variant="filled"
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <MButton
              variant="contained"
              color="primary"
              onClick={() => history.push(`/stats/${playername}`)}
            >
              Get your stats
            </MButton>
          </TitleContainer>
          <ScrollDown />
      </Hero>
      <Section
        bg='#212121'
        color='#fff'
        heading="View your stats"
        subhead="Find out where to improve">

        <Name>
          <MAvatar alt="fragman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" className="my-root-class"/>
          <User>MrFragman</User>
        </Name>

        <div style={{width: "75%"}}>
          <PrimaryStats 
            data={
              { 
                kills: 72710, 
                win: 45.20, 
                wins: 533, 
                deaths: 69413, 
                damage: 2965539,
                acc: 20.6,
                mvps: 1216,
                hs: 7046,
                time: 1475390
              }
            }
          />
        </div>

      </Section>

      <SectionBG
        bg='#525252'
        color='#fff'
        heading="See what your best weapons and maps are" >

        <FlexContainer>
          <BarStats 
            data={[
              {
                key: "Desert Eagle",
                data: 2430
              },
              {
                key: "M4A4",
                data: 6903
              },
              {
                key: "AK-47",
                data: 29708
              },
              {
                key: "AWP",
                data: 13111
              }
            ]} 
            title="Weapon Kills"
            color='orange'
          />

          <BarStats 
            data={[
              {
                key: "Inferno",
                data: 2430
              },
              {
                key: "Mirage",
                data: 4309
              },
              {
                key: "Dust 2",
                data: 4503
              },
              {
                key: "Vertigo",
                data: 1234
              }
            ]} 
            title="Map Round Wins"
            color='#4298f5'
          />
        </FlexContainer>
      </SectionBG>

      <Section
        bg='#212121'
        color='#fff'
        heading="Compare yourself to friends"
        subhead="">
        
        <CompareChart 
          player1={{
            name: "MrFragman",
            adr: 131.54,
            kdr: 1.02,
            hs: 5640,
            mvps: 2177
          }}
          player2={{
            name: "20matar70fugir",
            adr: 142.87,
            kdr: 1.04,
            hs: 5382,
            mvps: 2015
          }}
        />
              
      </Section>
    </div>
  );
}