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
import BasicTable from '../../Components/DataTable';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios'

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
  const [weapons, setWeapons] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('http://localhost:8080/profile/' + props.match.params.playerid);
    
      const gunNames = Object.getOwnPropertyNames(response.data.user.stats.gun);
      const gun = response.data.user.stats.gun;
      const guns = Object.keys(gun).map(function(key, i) {
        return {
          name: gunNames[i],
          kills: gun[key].kills,
          shots: gun[key].shots,
          hits: gun[key].hits
        }
      });

      console.log(guns);
      
      setData(response.data);
      setWeapons(guns);
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
         
          <BasicTable data={weapons}/>
        </TabPanel>

        <TabPanel  
          value={value}
          index={2}>
            <p>hello</p>
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