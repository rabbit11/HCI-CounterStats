import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const ListContainer = styled.div`
  padding: 5px;
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
    color: orange;
    font-weight: bold;
  }
  
`;

export const Title = styled.p`
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: #fff;
  font-size: 18px;
`
