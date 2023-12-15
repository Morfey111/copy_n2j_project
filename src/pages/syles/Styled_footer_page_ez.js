import styled from 'styled-components';

export const StyledFooter = styled.footer`
  font-family: 'IBM Plex Sans';
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 13em;

  @media (width < 1280px) {
    flex-direction: column;
    width: 100%;
    margin-top: 11em;
  }

  @media (width < 768px) {
    width: 100%;
  }
`;
