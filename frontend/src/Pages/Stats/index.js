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
} from './styles';
import PrimaryStats from '../../Components/PrimaryStats';
import LatestMatch from '../../Components/LatestMatch';
import OtherStats from '../../Components/OtherStats';
import WeaponTable from '../../Components/WeaponTable';
import MapTable from '../../Components/MapTable';
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

  const [data, setData] = useState({});
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
      
      setData(response.data);
      setMapsTable(maps);
      setWeaponsTable(guns);
      setWeaponsChart(gunsChart);
      setMapsChart(mapsChart);
    }

    loadData();
  }, [props.match.params.playerid])

  return(
    <Wrapper>
      <Background />
      <Container>
        {data.userProfile && <PlayerProfile>
          <MAvatar 
            alt="fragman" 
            src={data.userProfile.photourl} 
            className="my-root-class"
          />

          <Title>{data.userProfile.username}</Title>
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
          {data.user && 
            <PrimaryStats
              data={
                {
                  kills: data.user.stats.kills,
                  win: (data.user.stats.matches.won/data.user.stats.matches.played)*100,
                  wins: data.user.stats.matches.won,
                  deaths: data.user.stats.deaths,
                  damage: data.user.stats.damage,
                  acc: (data.user.stats.hits/data.user.stats.shots)*100,
                  time: data.user.stats.time,
                  mvps: data.user.stats.mvps,
                  hs: data.user.stats.headshots
                }
              }
            />
          }
          {data.user &&
            <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}>
              <div style={{width: "50%"}}>
                <Title>Latest Match</Title>
                <LatestMatch 
                  data={
                    {
                      wins: data.user.stats.last.wins,
                      rounds: data.user.stats.last.rounds,
                      kills: data.user.stats.last.kills,
                      deaths: data.user.stats.last.deaths,
                      mvps: data.user.stats.last.mvps,
                      money: data.user.stats.last.spending
                    }
                  }
                />
              </div>
              <div style={{width: "50%"}}>
                <Title>Other Stats</Title>
                <OtherStats 
                  data={
                    {
                      flashbang: data.user.stats.flashKill,
                      snipers: data.user.stats.snipers,
                      donated: data.user.stats.donated,
                      knife: data.user.stats.knife,
                      defused: data.user.stats.bombs.defused,
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

            <Title>Map Rounds Won</Title>
            <Histogram data={mapsChart} />
            <MapTable data={mapsTable} />
        </TabPanel>

        <TabPanel  
          value={value}
          index={3}>
            <MPaper>
            <p>hello</p>

            </MPaper>
        </TabPanel>
      </Container>
    </Wrapper>
  )
}