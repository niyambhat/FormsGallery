import React, {useState} from 'react'
import HomeLoanApplicationForm from '../../Forms/HomeLoanApplicationForm'
import {Grid} from "semantic-ui-react";
import ShowForm from '../ShowForm';

function HomeLoanApplication() {
const [formFields, setFormFields] = useState({});
const [valid, setValid] = useState();
const [error, setError] = useState();

const formUtilities =(value:any)=>{
  setFormFields(value);
}
  return (
    <>
    <Grid columns={2} padded>
      <Grid.Column>
      <HomeLoanApplicationForm initialValue ={formFields} formUtilities={formUtilities}/>
      </Grid.Column>
      <Grid.Column>
     <ShowForm fields={formFields}/>
     </Grid.Column>
    </Grid>
    </>
  )
}

export default HomeLoanApplication