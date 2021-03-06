import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';



const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044); */
  /* border: 5px solid white; */
  /* @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  } */
`;



const ContentStyles = styled.div`
  background: white;
  padding: 1rem;

  /* https://bennettfeely.com/clippy/ */
  padding-bottom: ${({ path }) => (path === '/' ? '200rem' : ' .1rem')};

  @media (max-width: 800px) {
        /* clip-path: polygon(0  0, 0 50%, 150% 0); */
    clip-path: ${({ path }) => (path === '/' ? 'polygon(0  0, 0 50%, 150% 0)' : 'polygon(0  0, 0 50%, 150% 0)')};
  }

  @media (min-width: 801px) {
    clip-path: polygon(0 0, 0 100%, 115% 0);
  }

`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {/* <SiteBorderStyles> */}
        <ContentStyles>
          <Nav />
          {children}
          {/* <Footer /> */}
        </ContentStyles>
      {/* </SiteBorderStyles> */}
    </>
  );
}
