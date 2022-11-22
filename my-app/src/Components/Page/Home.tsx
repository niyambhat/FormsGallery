import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'
import Hero from '../Hero'; 
import AboutConcept from '../AboutConcept';

function Home() {
  return (
    <>
    <Segment inverted vertical style={{ minHeight: 550,padding: '5em 0em' }}>
        <Container text>
        <Hero/>
        </Container>
        </Segment>
    <AboutConcept/>
</>
  )
}

export default Home