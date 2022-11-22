import React,{useState, useContext, useEffect} from 'react'
import { Form, FormInput } from 'semantic-ui-react'

import { FormContext } from './FormViewModel';
type InputProps={
    name:string,
    label:string,
    placeholder:string,
    validationLogic:any
}

const InputField=({name,label,placeholder,validationLogic}:InputProps)=>{
const form= useContext(FormContext);
const value=form?.getValue(name)

const validate =(e:any)=>{
  let error=validationLogic(e.target.value)
  form?.setInvalid(name,error)
}
  return (
    <div>
      <Form.Field>
        <label htmlFor={name}>{label}</label>
        <FormInput type="text"       error={{ content: 'Please enter your first name', pointing: 'below' }}
 name={name} value={value} onChange={(e)=>(form?.setValue(name,e.target.value))} placeholder={name}
        onBlur={(e:any)=>validate(e)}/>
      </Form.Field>
    </div>
  )
}

export default InputField