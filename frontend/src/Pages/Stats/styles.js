import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
	width: 55%;
  background-color: #212121;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const MAvatar = styled(Avatar)`
  &.my-root-class {
    margin: 10px;
    width: 100px;
    height: 100px;
  }
`;

export const MTabs = styled(Tabs)`
  &.my-root-class {
	  color: #fff;
  }
`;

export const MButton = styled(Button)`
  height: 53px;
`;

export const Search = styled(TextField)`
  /* .MuiFormControl-marginNormal {
    margin-top: 0;
    margin-bottom: 0;
  } */

  &.my-root-class {
    margin-top: 0;
    margin-bottom: 0;
  }

  background-color: #fff;
  width: 500px;
  border-radius: 5px;
`;

export const MPaper = styled(Paper)`
  &.my-root-class {
    background: #333333;
  }
  
  width: 100%;
  border-radius: 20px;
`;


export const PlayerProfile = styled.div`
	margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const CompareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.p`
  color: orange;
	font-size: 35px;
	font-weight: bold;
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  background-image: url('https://www.theloadout.com/wp-content/uploads/2019/09/csgo-cache-map.jpg');
  width: 1920px;
  height: 1080px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
`;
