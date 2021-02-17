import { Button, Grid, Typography } from '@material-ui/core';
import React, { createRef, useState } from 'react';
import InputText from '../../Components/ScrollTop/InputText/InputText';
import SendIcon from '@material-ui/icons/Send';
import ReCAPTCHA from "react-google-recaptcha";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
}));

const FormContact = props =>{

    const ref = createRef('');
    const classes = useStyles();
    const [ reCaptcha, setRecaptcha ] = useState(null);
    const [ errorReCaptcha, setErrorReCaptcha ] = useState(false);

    const enviar = (e) =>{
        e.preventDefault();
        if(reCaptcha){
            
        }else{
            setErrorReCaptcha(true);
        }
    }

    const validReCaptcha = ( value ) => {
        setRecaptcha(value);
    }

    return (  
            <form id="contact" onSubmit={enviar} className={classes.root} noValidate>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h5">
                            {"Contactar"}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="space-around" spacing={5}  >
                    <Grid item>
                        <InputText
                            inputRef={ref}
                            id = 'idName'
                            label = "Nombre"
                            required
                            inputtype='name'
                        />
                    </Grid>
                    <Grid item >
                        <InputText
                            id='idCompany'
                            label="Empresa / Institución" 
                            required
                            inputtype='company'
                        />
                    </Grid>
                    <Grid item >
                        <InputText
                            id='idEmail'
                            label="Email"
                            required
                            inputtype='email'
                        />
                    </Grid>
                    <Grid item >
                        <InputText
                            id='idPhone'
                            label="Teléfono"
                            inputtype="phone"
                        />
                    </Grid>
                    <Grid item >
                        <InputText
                            multiline
                            rows={4}
                            rowsMax={4}
                            id='idMessage'
                            label="Mensaje"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item>
                        <ReCAPTCHA
                            sitekey="6LeVX1saAAAAAJg12tZ6OxW7HhcsZoMp09O3rulM"
                            onChange={validReCaptcha}
                            hl="es-419"
                            onExpired={()=>{setRecaptcha(null)}}
                            onErrored={()=>{setRecaptcha(null)}}
                            theme={props.themeLight ? 'dark' : 'light'}
                        />
                        { errorReCaptcha && <p style={{ color: '#f44336', marginLeft: 14, marginRight: 14}} className={"MuiFormHelperText-root"} id="reCaptcha-helper-text">Valide que no es un robot.</p> } 
                    </Grid>
                </Grid> 
                <Grid container spacing={5}>
                    <Grid item>
                        <Button 
                            variant='contained' color='primary'
                            startIcon={<SendIcon/>}
                            type="submit"
                        >
                                {"Enviar"}
                        </Button>
                    </Grid>
                </Grid>
            </form>  
    );
}

export default FormContact;