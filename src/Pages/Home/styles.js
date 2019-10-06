import styled from 'styled-components';
import { Heading } from 'rebass';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ScrollDownIndicator } from 'react-landing-page'

export const Title = styled(Heading)`
  font-family: 'Counter-Strike';
`;

export const Subtitle = styled(Heading)`
  color: #474747;
  margin-bottom: 40px;
  font-family: "Roboto";
`;

export const Search = styled(TextField)`
  background-color: #fff;
  width: 500px;
  border-radius: 5px;
`

export const SearchBar = styled.div`
  padding: '2px 4px';
  display: 'flex';
  align-items: 'center';
  width: 400;
  background-color: #fff;
`

export const MButton = styled(Button)`
  height: 50px;
`

export const ScrollDown = styled(ScrollDownIndicator)`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`
