import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import {
  ListContainer, 
  Title,
  MList,
  MListItem,
  MListItemText
} from './styles';

function OtherStats({data}) {
  return (
    <ListContainer>
      <MList classes={{ root: 'my-root-class' }}>

        <MListItem>
          <MListItemText primary="Flashbanged Enemies Killed"/>
          <ListItemSecondaryAction>
            <Title>{data.flashbang}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="Snipers Killed"/>
          <ListItemSecondaryAction>
            <Title>{data.snipers}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />
      
        <MListItem>
          <MListItemText primary="Guns Donated"/>
          <ListItemSecondaryAction>
            <Title>{data.donated}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="Knife Kills"/>
          <ListItemSecondaryAction>
            <Title>{data.knife}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="Bombs Defused"/>
          <ListItemSecondaryAction>
            <Title>{data.defused}</Title>
          </ListItemSecondaryAction>
        </MListItem>

      </MList>
    </ListContainer>
  )
};

export default OtherStats;
