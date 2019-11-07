import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

export const Container = styled.div`
	width: 50%;
	background-color: #212121;
`;

export const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: url('https://vignette.wikia.nocookie.net/cswikia/images/a/a8/Csgo-de-mirage.png/revision/latest?cb=20140820130845');
	min-height: 100vh;
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

export const Title = styled.p`
  color: orange;
	font-size: 35px;
	font-weight:
`
