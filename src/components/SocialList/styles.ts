import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;

  li {
    & + li {
      margin-left: 12px;
    }

    svg {
      fill: #483d3f;
    }
  }
`;
