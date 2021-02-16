import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import InputText from '../../Components/ScrollTop/InputText/InputText';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    paddingTop: theme.spacing(12)
  },
}));

const FormContact = props =>{

    const classes = useStyles();

    const enviar = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    return (  
            <form id="contact" onSubmit={enviar} className={classes.root} novalidate>
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
                <Grid container justify="center" spacing={5}>
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