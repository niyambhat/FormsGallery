import React, {useState,useEffect, createContext, useCallback} from 'react';
import styled from 'styled-components';

type AppContextInterface={
    setValue:any,
    getValue:any,
    setInvalid:any
}
const FormContextProps:AppContextInterface = {
    setValue: function setValue(){},
    getValue: null,
    setInvalid:null
}



export const FormContext = createContext<AppContextInterface | null>(FormContextProps);
type FormViewModelType={
    children:React.ReactNode,
    formFields:any,
    formFieldsSetter:any,
    validationSetters:any
}


export const FormViewModel=({children, formFields, formFieldsSetter, validationSetters}:FormViewModelType)=>{
const [values, setValues] =useState(formFields);
const [invalidFields, setInvalidFields] = useState({});
useEffect(()=>{
if(formFields) setValues(formFields);
},[formFields])

useEffect(()=>{
if(formFieldsSetter) formFieldsSetter(values)
},[formFieldsSetter, values])

useEffect(()=>{
if(validationSetters) validationSetters(true, invalidFields);
},[invalidFields])

//global setter for new form fields
const setValue = (field:string,value:any)=>{
setValues((prev:any)=>({...prev,[field]:value}))
} 

const getValue =(field:any)=>{
return values[field]
}

//global invalid fields capturer
const setInvalid=(field:any, error:any)=>{
setInvalidFields((prev:any)=>({...prev,[field]:error}))
}

const FormMethods:AppContextInterface = {
    setValue:setValue,
    getValue:getValue,
    setInvalid:setInvalid
}
    return(
        <FormContext.Provider value={FormMethods}>
            {children}
        </FormContext.Provider>
    )
}