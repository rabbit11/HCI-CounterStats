import styled from 'styled-components';
import { Heading } from 'rebass';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ScrollDownIndicator, Section } from 'react-landing-page'
import chicken from '../../assets/chicken.png'

export const Title = styled(Heading)`
  font-family: 'Counter-Strike';
  color: #fff;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  background: rgba(0, 0, 0, 0.6);
  height: 400px;
  width: 700px;
  border-radius: 10px;
`;

export const Subtitle = styled(Heading)`
  color: orange;
  margin-bottom: 40px;
  font-family: "Roboto";
`;

export const Search = styled(TextField)`
  background-color: #fff;
  width: 500px;
  border-radius: 5px;
`

export const MButton = styled(Button)`
  height: 45px;

`

export const ScrollDown = styled(ScrollDownIndicator)`
  color: #000;
  font-size: 27px;
  font-weight: bold;
`

export const SectionBG = styled(Section)`
  background-image: url(${chicken});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100px;
`
