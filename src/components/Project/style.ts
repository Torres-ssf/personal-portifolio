import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #483d3f;
  border: 1px solid #dfe1e6;
  border-radius: 24px;
  max-width: 1156px;
  margin: 142px auto;

  img {
    border-radius: 8px;
    padding: 24px 0 24px 24px;
    height: 448px;
    width: 544px;
  }
`;

export const Description = styled.div`
  color: #d5fff3;
  display: flex;
  flex-direction: column;
  margin: 48px 46px;

  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
  }

  div {
    color: #6b778c;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-top: 20px;

    span {
      & + span {
        margin-left: 12px;
      }
    }
  }

  p {
    margin-top: 32px;
    font-size: 1rem;
    line-height: 24px;
  }

  ul {
    margin-top: 24px;
    display: flex;

    li {
      background: #ebebff;
      border-radius: 8px;
      padding: 4px 12px;
      color: #6070ff;
      height: 24px;
      font-weight: 500;
      font-size: 0.8rem;
      line-height: 16px;

      & + li {
        margin-left: 8px;
      }
    }
  }

  button {
    background: #483d3f;
    border: 1px solid #396df2;
    border-radius: 8px;
    color: #396df2;
    /* border-color: #396df2; */
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.03em;
    margin-top: 48px;
    height: 54px;
    width: 120px;
    transition: 300ms;

    &:hover {
      background: #396df2;
      color: white;
    }
  }
`;

export const Dot = styled.span`
  background-color: #6b778c;
  border-radius: 50%;
  display: block;
  width: 8px;
  height: 8px;
`;
