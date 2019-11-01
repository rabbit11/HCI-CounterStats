import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const MPaper = styled(Paper)`
  &.my-root-class {
    background: #333333;
  }

  min-width: 150px;
  max-width: 150px;
  margin: 8px;
  border-radius: 20px;
  padding: 10px;
`

export const Title = styled.p`
  color: orange;
  font-size: 20px;
`

export const Number = styled.h2`
  color: #fff;
`

export const User = styled.h1`
  color: orange;
  padding: 10px;
`

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const MAvatar = styled(Avatar)`
  &.my-root-class {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`
