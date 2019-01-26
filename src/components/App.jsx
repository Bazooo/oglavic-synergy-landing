import React from 'react';
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page';
import styled from 'styled-components';

const imgLink = "https://images.unsplash.com/photo-1548330184-380a564efc36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

const AppWrapper = styled.div`
  width: 100%;
`;

const FullHeight = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
`;

const App = () => {
  return (
    <AppWrapper>
      <Hero color="white" bg="black" backgroundImage={imgLink}>
        <CallToAction href="/getting-started" mt={9}>Get Started...</CallToAction>
        <ScrollDownIndicator />
      </Hero>
      <FullHeight background="#bbb">
        testerino
      </FullHeight>
    </AppWrapper>
  );
}

export default App;
