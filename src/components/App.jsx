import React from 'react';
import {
  ScrollDownIndicator
} from 'react-landing-page';
import styled from 'styled-components';

// const imgLink = "https://images.unsplash.com/photo-1548330184-380a564efc36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
const imgLink = "https://images.pexels.com/photos/936575/pexels-photo-936575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const AppWrapper = styled.div`
  width: 100%;
`;

const FullHeight = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.background};
`;

const Pitch = styled.div`
  display: grid;
  height: 100vh;
  background: url(${imgLink});
  background-size: cover;
  background-position-x: center;
  text-align: center;
`;

const MegaTitle = styled.div`
  text-align: center;
  font-size: 72px;
  margin-bottom: 15px;
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

const App = () => {
  return (
    <AppWrapper>
      <FullHeight>
        <MegaTitle>We are all about synergy...</MegaTitle>
        <Subtitle>Get started</Subtitle>
        <ScrollDownIndicator />
      </FullHeight>
      <Pitch>
          <ul>
            <li>Made for VR</li>
            <li>Accessible for everybody</li>
            <li>Cheap</li>
            <li>Easy & Fun</li>
          </ul>
      </Pitch>
    </AppWrapper>
  );
}

export default App;
