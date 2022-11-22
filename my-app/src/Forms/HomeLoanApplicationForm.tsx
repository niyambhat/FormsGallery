import React, { useState, useEffect } from 'react'
import { FormViewModel } from './FormViewModel'
import { Form } from 'semantic-ui-react'
import InputField from './InputField';
import { Container, Grid} from 'semantic-ui-react';
import styled from 'styled-components';


type HomeLoanApplicationProps={
    initialValue:any,
    formUtilities:any
}

function HomeLoanApplicationForm({initialValue, formUtilities}:HomeLoanApplicationProps) {
const [formFields, setFormFields] = useState(initialValue); 
const [valid, setValid] = useState<Boolean>()
const [errors, setErrors] = useState();

useEffect(()=>{
if(formUtilities) formUtilities(formFields, valid, errors)
},[formFields, valid, errors])


const ValidationSetters=(valid:boolean,errors:any)=>{
setValid(valid);
setErrors(errors);
}

const LengthValidation =(v:any)=>{
 if( v.length < 3){
  return 'Too short!'
} else{
  return null
}
}

const Wrap =styled.div`
.form-wrap{
  background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 2px;
}
`

return (
<Wrap>
<Grid style={{ height: '100vh' }} verticalAlign='middle'>
<Grid.Column className="form-wrap" style={{ maxWidth: 450 }}>
  <h1>Home Loan Application</h1>
    <Form>
      <FormViewModel  formFields={formFields} formFieldsSetter={setFormFields} validationSetters={ValidationSetters}>
        <InputField name="FirstName" label='First Name' placeholder='First Name' validationLogic={LengthValidation}/>
        <InputField name="LastName" label='Lasst Name' placeholder='Last Name' validationLogic={LengthValidation}/>
      </FormViewModel>   
    </Form>
</Grid.Column>
</Grid>
</Wrap>
    
  )
}

export default HomeLoanApplicationForm