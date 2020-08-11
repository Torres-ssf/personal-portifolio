import styled, { css } from 'styled-components';

interface ContainerProps {
  opened: boolean;
}

export const ItensList = styled.ul`
  flex-wrap: wrap;
  max-height: 0;
  display: flex;
  padding: 0 12px;
  transition: 350ms;

  li {
    background: #ebebff;
    color: #6070ff;
    border-radius: 8px;
    padding: 4px 12px;
    margin: 4px 8px;
    font-size: 0.9rem;
  }
`;

export const Container = styled.span<ContainerProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid #dfe1e6;
  transition: 350ms;

  ${props =>
    props.opened &&
    css`
      border-color: transparent;
    `}
  ${ItensList} {
    ${props =>
      props.opened &&
      css`
        padding: 0 12px 16px;
        max-height: 160px;
      `}
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    overflow: hidden;

    h4 {
      color: black;
      font-size: 1rem;
      font-weight: 400;
      margin-left: 24px;
    }

    button {
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 350ms;

      ${props =>
        props.opened &&
        css`
          transform: rotate(90deg);
        `}
    }

    svg {
      fill: #666;
    }

    @media (max-width: 1000px) {
      h4 {
        margin-left: 12px;
      }
    }
  }
`;
