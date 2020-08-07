import styled from 'styled-components';

export const Container = styled.div`
  color: #d5fff3;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
  }

  li {
    & + li {
      margin-left: 12px;
    }

    svg {
      fill: #483d3f;
    }
  }
`;
