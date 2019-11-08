import React from 'react';
import Divider from '@material-ui/core/Divider';

import {
  ListContainer, 
  Title,
  MList,
  MListItem,
  MListItemText
} from './styles';

const LatestMatch = (data) => {
  return (
    <ListContainer>
      <MList classes={{ root: 'my-root-class' }}>
        <MListItem>
          <Title>Kills</Title>
          <MListItemText primary="54" inset="true" />
        </MListItem>
        <Divider />
        <MListItem>
          <Title>Deaths</Title>
        </MListItem>
      </MList>
    </ListContainer>
  )
};

export default LatestMatch;
