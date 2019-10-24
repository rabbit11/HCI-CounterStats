import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: orange;
  font-size: 30px;
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
