import { useState } from "react";

export const useForm = (initialValues) => {
  
  const [values, setValues] = useState(initialValues);
  
  const handleChange = e => {
    const { value, name, type, checked } = e.target;
    console.log('type', type);
    
    let valueToUse;

    if(type === 'checkbox'){
      valueToUse = checked;
    } else {
      valueToUse = value;
    }

    setValues({
      ...values,
      [name]: valueToUse
    });
  }

  return {
    values,
    setValues, 
    handleChange
  }
}