import React from 'react'
import { Hero, Section } from 'react-landing-page';
import PrimaryStats from '../../Components/PrimaryStats'
import { 
  Title, 
  Subtitle, 
  Search, 
  MButton, 
  ScrollDown
} from './styles';
 
export default function Home() {
  return(
    <div>
      <Hero
        color="black"
        bg="white"
        bgOpacity="0.6"
        backgroundImage="https://steamcdn-a.akamaihd.net/apps/csgo/images/inferno/mid1-2.jpg?v=1"
      >
          <Title fontSize={[60]}>Counter Stats -</Title>
          <Subtitle fontSize={[30]}>Shoot less, hit more</Subtitle>
            <Search 
              id="standard-search"
              label="Enter your Steam ID"
              type="search"
              margin="normal"
              variant="filled"
            />
            <MButton
              variant="contained"
              color="primary"
            >
              Get your stats
            </MButton>
          <ScrollDown />
      </Hero>
      <Section
        bg='#212121'
        color='#fff'
        heading="View your stats"
        subhead="Find out where to improve">

        <PrimaryStats 
          user='MrFragman'
          data={{kills: '21.037', win: '45,20%', wins:'533', deaths:'20.960', damage:'2.965.539'}}/>
      </Section>
    </div>
  );
}