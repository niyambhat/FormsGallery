import React, {useState,useEffect, createContext, useCallback} from 'react';
import { getEffectiveTypeParameterDeclarations } from 'typescript';

type AppContextInterface={
    setValue:any,
    getValue:any
}
const FormContextProps:AppContextInterface = {
    setValue: function setValue(){},
    getValue: null
}



export const FormContext = createContext<AppContextInterface | null>(FormContextProps);
type FormViewModelType={
    children:React.ReactNode,
    formFields:any,
    formFieldsSetter:any
}


export const FormViewModel=({children, formFields, formFieldsSetter}:FormViewModelType)=>{
const [values, setValues] =useState(formFields);

//bind formFields to context
useEffect(()=>{
if(formFields) setValues(formFields);
},[formFields])

useEffect(()=>{
if(formFieldsSetter) formFieldsSetter(values)
},[formFieldsSetter, values])

//global setter for new form fields
const setValue = (field:string,value:any)=>{
setValues((prev:any)=>({...prev,[field]:value}))
} 

const getValue =(field:any)=>{
return values[field]
}

const FormMethods:AppContextInterface = {
    setValue:setValue,
    getValue:getValue
}
    return(
        <FormContext.Provider value={FormMethods}>
            {children}
        </FormContext.Provider>
    )
}