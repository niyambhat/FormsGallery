import React from 'react'
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'


function Hero() {
  return (
    <>
    <Header
      as='h1'
      content='Recipie React Forms'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '1.5em',
      }}
    />
    <Header
      as='h2'
      content='HTML5/CSS/JavaScript, React JS, Semantic UI'
      inverted
      style={{
        fontSize:  '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Less states to manage 
    </Button>
    </>
  )
}

export default Hero