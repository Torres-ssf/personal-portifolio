import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
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
  }

  img {
    height: 24px;
    width: 24px;
  }
`;
