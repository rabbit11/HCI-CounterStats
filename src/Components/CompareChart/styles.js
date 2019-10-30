import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StatContainer = styled.div`
  border-top: 1px solid #d9dce0;
  width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MAvatar = styled(Avatar)`
  &.my-root-class {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`

export const User = styled.h1`
  color: orange;
  padding: 10px;
`
