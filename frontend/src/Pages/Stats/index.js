import React, { useState, useEffect } from 'react';
import { 
  Container, 
  PlayerProfile,
  MAvatar,
  MPaper,
  MTabs,
  Wrapper,
  Background,
  Title,
  Search,
  MButton,
  SearchContainer,
  CompareContainer
} from './styles';
import PrimaryStats from '../../Components/PrimaryStats';
import LatestMatch from '../../Components/LatestMatch';
import OtherStats from '../../Components/OtherStats';
import WeaponTable from '../../Components/WeaponTable';
import MapTable from '../../Components/MapTable';
import CompareChart from '../../Components/CompareChart';
import MultiCategory from '../../Components/MultiCategory';
import Histogram from '../../Components/Histogram';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios'

function changeCaseFirstLetter(params) {
  if(typeof params === 'string') {
    return params.charAt(0).toUpperCase() + params.slice(1);
  }
  return null;
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default function Stats(props) {

  const [player2Data, setPlayer2Data] =  useState({});
  const [player2Name, setPlayer2Name] = useState("");

  const [player1Data, setPlayer1Data] = useState({});
  const [weaponsTable, setWeaponsTable] = useState([]);
  const [mapsTable, setMapsTable] = useState([]);
  const [weaponsChart, setWeaponsChart] = useState([]);
  const [mapsChart, setMapsChart] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('http://localhost:8080/profile/' + props.match.params.playerid);
    
      let gunNames = Object.getOwnPropertyNames(response.data.user.stats.gun);
      let mapNames = Object.getOwnPropertyNames(response.data.user.stats.map);

      gunNames = gunNames.map(name => {
        return changeCaseFirstLetter(name);
      });

      mapNames = mapNames.map(name => {
        return changeCaseFirstLetter(name);
      });

      const gun = response.data.user.stats.gun;
      const map = response.data.user.stats.map;

      const guns = Object.keys(gun).map(function(key, i) {
        return {
          name: gunNames[i],
          kills: gun[key].kills,
          shots: gun[key].shots,
          hits: gun[key].hits
        }
      });

      const gunsChart = Object.keys(gun).map(function(key, i) {
        return {
          key: gunNames[i],
          data: gun[key].kills
        }
      });

      const maps = Object.keys(map).map(function(key, i) {
        return {
          name: mapNames[i],
          won: map[key].rounds.won,
          played: map[key].rounds.played,
          wr: (map[key].rounds.won / map[key].rounds.played).toFixed(2)
        }
      });

      const mapsChart = Object.keys(map).map(function(key, i) {
        return {
          key: mapNames[i],
          data: map[key].rounds.won
        }
      });
      
      setPlayer1Data(response.data);
      setMapsTable(maps);
      setWeaponsTable(guns);
      setWeaponsChart(gunsChart);
      setMapsChart(mapsChart);
    }

    loadData();
  }, [props.match.params.playerid]);

  const loadPlayer2 = async () => {
    const response = await axios.get('http://localhost:8080/profile/' + player2Name);
    setPlayer2Data(response.data);
  }

  return(
    <Wrapper>
      <Background />
      <Container>
        {player1Data.userProfile && <PlayerProfile>
          <MAvatar 
            alt="fragman" 
            src={player1Data.userProfile.photourl} 
            className="my-root-class"
          />

          <Title>{player1Data.userProfile.username}</Title>
        </PlayerProfile>}
        <MPaper classes={{ root: 'my-root-class' }}>
          <MTabs
            classes={{ root: 'my-root-class' }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab label="Stats"  {...a11yProps(0)} />
            <Tab label="Weapons"  {...a11yProps(1)} />
            <Tab label="Maps"  {...a11yProps(2)} />
            <Tab label="Compare"  {...a11yProps(3)} />
          </MTabs>
        </MPaper>
        <TabPanel
          value={value}
          index={0}
        >
          {player1Data.user && 
            <PrimaryStats
              data={
                {
                  kills: player1Data.user.stats.kills,
                  win: (player1Data.user.stats.matches.won/player1Data.user.stats.matches.played)*100,
                  wins: player1Data.user.stats.matches.won,
                  deaths: player1Data.user.stats.deaths,
                  damage: player1Data.user.stats.damage,
                  acc: (player1Data.user.stats.hits/player1Data.user.stats.shots)*100,
                  time: player1Data.user.stats.time,
                  mvps: player1Data.user.stats.mvps,
                  hs: player1Data.user.stats.headshots
                }
              }
            />
          }
          {player1Data.user &&
            <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}>
              <div style={{width: "50%"}}>
                <Title>Latest Match</Title>
                <LatestMatch 
                  data={
                    {
                      wins: player1Data.user.stats.last.wins,
                      rounds: player1Data.user.stats.last.rounds,
                      kills: player1Data.user.stats.last.kills,
                      deaths: player1Data.user.stats.last.deaths,
                      mvps: player1Data.user.stats.last.mvps,
                      money: player1Data.user.stats.last.spending
                    }
                  }
                />
              </div>
              <div style={{width: "50%"}}>
                <Title>Other Stats</Title>
                <OtherStats 
                  data={
                    {
                      flashbang: player1Data.user.stats.flashKill,
                      snipers: player1Data.user.stats.snipers,
                      donated: player1Data.user.stats.donated,
                      knife: player1Data.user.stats.knife,
                      defused: player1Data.user.stats.bombs.defused,
                    }
                  }
                />
              </div>
            </div>
          }
        </TabPanel>

        <TabPanel  
          value={value}
          index={1}>

          <Title>Weapon Usage</Title>
          <Histogram data={weaponsChart}/>
          <WeaponTable data={weaponsTable}/>
        </TabPanel>

        <TabPanel  
          value={value}
          index={2}>

            <Title>Map Rounds Played</Title>
            <Histogram data={mapsChart} />
            <MapTable data={mapsTable} />
        </TabPanel>

        <TabPanel  
          value={value}
          index={3}>
            <Title>Compare Players</Title>
            <SearchContainer>
              <Search
                classes={{ root: 'my-root-class' }}
                id="standard-search"
                label="Steam ID of player to compare"
                type="search"
                margin="normal"
                variant="filled"
                onChange={(e) => setPlayer2Name(e.target.value)}
              />
              <MButton
                variant="contained"
                color="primary"
                onClick={() => loadPlayer2()}
              >
                Find
              </MButton>
            </SearchContainer>
            {player2Data.user && 
              <CompareContainer>
                <MultiCategory 
                  data={[
                    {
                      key: "Win Ratio",
                      data: [
                        {
                          key: player1Data.userProfile.username,
                          data: (player1Data.user.stats.matches.won/player1Data.user.stats.matches.played)*100
                        },
                        {
                          key: player2Data.userProfile.username,
                          data: (player2Data.user.stats.matches.won/player2Data.user.stats.matches.played)*100
                        },
                      ],
                    },
                    {
                      key: "Accuracy",
                      data: [
                        {
                          key: player1Data.userProfile.username,
                          data: (player1Data.user.stats.hits/player1Data.user.stats.shots)*100
                        },
                        {
                          key: player2Data.userProfile.username,
                          data: (player2Data.user.stats.hits/player2Data.user.stats.shots)*100
                        },
                      ]
                    },
                    {
                      key: "MVPs/Rounds",
                      data: [
                        {
                          key: player1Data.userProfile.username,
                          data: (player1Data.user.stats.mvps/player1Data.user.stats.rounds.played)*100
                        },
                        {
                          key: player2Data.userProfile.username,
                          data: (player2Data.user.stats.mvps/player2Data.user.stats.rounds.played)*100
                        },
                      ]
                    },
                    {
                      key: "Headshots/Kills",
                      data: [
                        {
                          key: player1Data.userProfile.username,
                          data: (player1Data.user.stats.headshots/player1Data.user.stats.kills)*100
                        },
                        {
                          key: player2Data.userProfile.username,
                          data: (player2Data.user.stats.headshots/player2Data.user.stats.kills)*100
                        },
                      ]
                    }
                  ]}
                />
                <CompareChart 
                  player2 = {{
                    name: player2Data.userProfile.username,
                    pic: player2Data.userProfile.photourl,
                    adr: Math.round((player2Data.user.stats.damage / player2Data.user.stats.rounds.played) * 1e2 ) / 1e2,
                    kdr: Math.round((player2Data.user.stats.kills / player2Data.user.stats.deaths) * 1e2 ) / 1e2,
                    hs: player2Data.user.stats.headshots,
                    mvps: player2Data.user.stats.mvps
                  }}

                  player1 = {{
                    name: player1Data.userProfile.username,
                    pic: player1Data.userProfile.photourl,
                    adr: Math.round((player1Data.user.stats.damage / player1Data.user.stats.rounds.played) * 1e2 ) / 1e2,
                    kdr: Math.round((player1Data.user.stats.kills / player1Data.user.stats.deaths) * 1e2 ) / 1e2,
                    hs: player1Data.user.stats.headshots,
                    mvps: player1Data.user.stats.mvps
                  }}
                />
              </CompareContainer>
            }
        </TabPanel>
      </Container>
    </Wrapper>
  )
}