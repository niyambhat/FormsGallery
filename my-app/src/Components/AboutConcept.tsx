import React from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'
  import Snip from "../Assets/Snip.png"
  

  
function AboutConcept() {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Standarized approach in managing forms
             </Header>
            <p style={{ fontSize: '1.33em' }}>
              Utilising the ReactContext API to do build a centralised Field Validation system for a web project.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Live debugging tool 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              A terminal type debuging tool to test and view Field Validations. This can be made accesible for testers or developers. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={Snip} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default AboutConcept