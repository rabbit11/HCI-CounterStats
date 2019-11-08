import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const ListContainer = styled.div`
  width: 50%;
`

export const MList = styled(List)`
  &.my-root-class {
    background: #333333;
  }
`;

export const MListItem = styled(ListItem)`
  height: 45px;
`;

export const MListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: #fff;
    font-weight: bold;
  }

  .MuiListItemText-inset {
    margin-left: 20px;
  }
`;

export const Title = styled.p`
  color: orange;
  font-size: 15px;
`
