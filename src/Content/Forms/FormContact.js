import { Button } from '@material-ui/core';
import React from 'react';
import InputText from '../../Components/ScrollTop/InputText/InputText';
import SendIcon from '@material-ui/icons/Send';

const FormContact = props =>{

    const enviar = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h5>{"Contacto"}</h5>
                <form id="contact" onSubmit={enviar}> 
                    <div className="row">
                        <div className="col-md-6">
                            <InputText
                                id = 'idName'
                                label = "Nombre"
                                defaultValue = ""
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <InputText
                                id='idLastName'
                                label="Apellido"
                                defaultValue="Matias"
                            />
                        </div>
                    </div> 
                    <Button 
                        variant="contained"
                        startIcon={<SendIcon/>}
                        type="submit"
                    >
                            {"Enviar"}
                    </Button>
                </form> 
            </div> 
        </div>
    );
}

export default FormContact;