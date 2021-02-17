import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { inputValidation } from '../../../Helpers/HelperValidation';

const InputText = props =>{ 

    const [ error, setErrorText ] = useState(null);
    const toValid = ( e ) =>{
        if(props.required)
        setErrorText(inputValidation({inputType: props.inputtype, value: e.target.value.trim()}));
    }

    return (
        <TextField
            variant="filled"
            fullWidth 
            {...props}
            onBlur={toValid}
            helperText={error}
            error={error!==null}
            autoComplete={'off'}
        />
    );
}

export default InputText;

