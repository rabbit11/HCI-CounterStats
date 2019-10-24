import styled from 'styled-components';
import { Heading } from 'rebass';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ScrollDownIndicator, Section } from 'react-landing-page'
import chicken from '../../assets/chicken.png'
import terror from '../../assets/terro.png'

export const Title = styled(Heading)`
  font-family: 'Counter-Strike';
`;

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

export const SectionBG = styled(Section)`
  background-image: url(${chicken});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100px;
`
