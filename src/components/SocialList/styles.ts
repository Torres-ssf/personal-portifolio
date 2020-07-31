import styled from 'styled-components';

export const Container = styled.div`
  color: #d5fff3;
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  h3 {
    color: #6184d8;
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
  }

  img {
    height: 24px;
    width: 24px;
  }
`;
