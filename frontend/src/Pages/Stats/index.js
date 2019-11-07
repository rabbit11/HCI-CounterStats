import React, { useState, useEffect } from 'react';
import { 
  Container, 
  PlayerProfile,
  MAvatar,
  MPaper,
  MTabs,
  Wrapper,
  Title,
} from './styles';
import PrimaryStats from '../../Components/PrimaryStats';
import Tabs from '@material-ui/core/Tabs';
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('http://localhost:8080/profile/' + props.match.params.playerid);
      console.log(response)
      setData(response.data);
    }

    loadData();
  }, [props.match.params.playerid])

  return(
    <Wrapper>
      <Container>
        <PlayerProfile>
          <MAvatar 
            alt="fragman" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G0LdAD09Z8uFZTTDFGSK12wwJR559zU6pyKcXV2_cjijYeVT" 
            className="my-root-class"
          />

          <Title>Player Name</Title>
        </PlayerProfile>
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
          {data.stats && 
            <PrimaryStats
              data={
                {
                  kills: data.stats.kills,
                  win: (data.stats.matches.won/data.stats.matches.played)*100,
                  wins: data.stats.matches.won,
                  deaths: data.stats.deaths,
                  damage: data.stats.damage,
                  acc: (data.stats.hits/data.stats.shots)*100
                }
              }
            />
          }
        </TabPanel>
            
      </Container>
    </Wrapper>
  )
}