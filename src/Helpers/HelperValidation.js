export const rgxName= /^[a-z ,.'-]+$/i;
export const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const phone = /^\d{10}$/;

const validation = {
    'name':{ textError:'Ingrese un Nombre válido.', regex: rgxName },
    'email':{ textError:'Ingrese un Email válido.', regex: email }, 
    'phone':{ textError:'Ingrese un teléfono válido.', regex: email },
    'company':{ textError:'Ingrese una empresa / institución válida.', regex: rgxName },
}

export function inputValidation({inputType, value }){
    if(validation.hasOwnProperty(inputType)){
        if(!validation[inputType].regex.test(value)) 
            return validation[inputType].textError;
    }else{
        return 'Este campo es requerido.'
    } 
    return null;
}

export default function HelperValidation() {
    return null;
}
