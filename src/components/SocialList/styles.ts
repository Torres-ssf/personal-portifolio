import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  iconColor: string;
}

export const Container = styled.ul<ContainerProps>`
  display: flex;

  li {
    & + li {
      margin-left: 16px;
    }

    svg {
      fill: ${props => props.iconColor};
      transition: fill 300ms;

      &:hover {
        ${props => {
          return css`
            fill: ${shade(0.5, props.iconColor)};
          `;
        }}
      }
    }
  }
`;
