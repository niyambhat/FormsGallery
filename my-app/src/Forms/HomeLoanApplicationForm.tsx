import React, { useState, useEffect } from 'react'
import { FormViewModel } from './FormViewModel'
import { Form } from 'semantic-ui-react'
import InputField from './InputField';
import { Container, Grid} from 'semantic-ui-react'

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

return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
<Grid.Column style={{ maxWidth: 450 }}>
    <Form>
    <FormViewModel  formFields={formFields} formFieldsSetter={setFormFields}>
    <InputField name="FullName" label='Full Name' placeholder='Full Name'/>
    </FormViewModel>   
    </Form>
</Grid.Column>
</Grid>
    
  )
}

export default HomeLoanApplicationForm