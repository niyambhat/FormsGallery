import React,{useContext} from 'react'
import { Form } from 'semantic-ui-react'

import { FormContext } from './FormViewModel';
type InputProps={
    name:string,
    label:string,
    placeholder:string
}

const InputField=({name,label,placeholder}:InputProps)=>{
const form= useContext(FormContext);

  return (
    <div>
      <Form.Field>
        <label htmlFor={name}></label>
        <input type="text" name={name} value={form?.getValue(name)} onChange={(e)=>(form?.setValue(name,e.target.value))} placeholder={name}/>
      </Form.Field>
    </div>
  )
}

export default InputField