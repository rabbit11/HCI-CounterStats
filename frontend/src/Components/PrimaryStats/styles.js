import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
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
