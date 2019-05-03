import styled, { css, IFullTheme } from '@theme'

import { hexToRgb } from '../../../../utils/hexToRgb'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  border: ${({ theme }) =>
    `1px solid rgba(${hexToRgb(theme.colors.medium)}, 0.4)`};
  background-color: ${({ theme }) =>
    `rgba(${hexToRgb(theme.colors.subtle)}, 0.3)`};

  min-height: 30em;

  @media (max-width: 64em) {
    min-height: 25em;
  }
`

export const TextContent = styled.div`
  padding: 3rem;

  font-family: monospace;
  line-height: 1.5;

  @media (max-width: 64em) {
    padding: 2rem;
  }

  @media (max-width: 32em) {
    padding: 1.5rem;
  }
`

export const Text = styled.p``

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  border-top: ${({ theme }) =>
    `1px solid rgba(${hexToRgb(theme.colors.medium)}, 0.4)`};
`

export const BottomButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.875em;
  line-height: 1;
  padding: 0.5rem 0;

  svg {
    margin-left: 0.5rem;
  }

  ${({
    theme,
    isHighlighted,
  }: {
    theme: IFullTheme
    isHighlighted?: boolean
  }) =>
    isHighlighted &&
    css`
      color: ${theme.colors.highlight};
    `}

  @media (max-width: 64em) {
    &:last-child,
    &:nth-last-child(2),
    &:nth-last-child(3) {
      display: none;
    }
  }

  @media (max-width: 64em) {
    &:nth-last-child(2),
    &:nth-last-child(3) {
      display: inline;
    }
  }

  @media (max-width: 32em) {
    &:nth-last-child(2),
    &:nth-last-child(3) {
      display: none;
    }
  }
`

export const Divider = styled.span`
  display: block;
  width: 1px;
  background-color: ${({ theme }) =>
    `rgba(${hexToRgb(theme.colors.medium)}, 0.4)`};

  @media (max-width: 64em) {
    display: none;
  }

  @media (max-width: 48em) {
    display: block;
  }

  @media (max-width: 32em) {
    display: none;
  }
`