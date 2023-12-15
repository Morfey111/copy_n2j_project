import styled from 'styled-components';

export const StyledHeader = styled.header`

  font-family: 'IBM Plex Sans';
  padding-left: 7.5rem;
  margin-right: -1.5em;
  overflow: hidden;

  @media (width < 1280px) {
    padding-left: 0em;
  }

  @media (width < 768px) {
    padding-left: 0em;
    text-align: left;
    margin-right: 0em;
  }
`;
