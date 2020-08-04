import styled from 'styled-components';

export const Container = styled.div`
  color: #d5fff3;
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  h3 {
    color: #3584cb;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    margin-top: 14px;
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
