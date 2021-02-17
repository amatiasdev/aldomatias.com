import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Typography, Paper } from '@material-ui/core';
import { School, MenuBook, Apartment, Business, Group, Work } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  actionsHover:{
    '&:hover':{
      cursor:'pointer'
    }
  },
  title:{
    padding: theme.spacing(4),
  },
  activeBackground:{
    backgroundColor:'#3F51B5',
    borderRadius: '50%', 
    width: 50,
    height: 50,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  inactiveBackground:{
    backgroundColor:'none',
    width: 50,
    height: 50,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorIcon:{
    color:'white'
  },
  timeLine:{
    marginLeft: 25
  }
}));

function getSteps() {
  return [  'Estudié Ingenieria en Sistemas Computacionales.', 
            'Realicé un par de proyectos para mi Universidad.', 
            <span>{'Fundé la comunidad estudiantil '}<a href="https://www.facebook.com/InnovaTESI/" target="_blank">{'INNOVA TESI.'}</a></span>,
            <span>{'Realicé mis residencias profesionales en '}<a href="http://ksh.com.mx" target="_blank">{'Kristal Software House.'}</a></span>,
            <span>{'Comencé a trabajar como desarrollador FrontEnd en '}<a href="http://www.igenter.com/mx/" target="_blank">{'iGenter México.'}</a></span>,
            'En Septiembre de 2020 me titulé.',
        ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <span> 
                 {`En el año 2014 comencé a estudiar en el `}<a href="https://tesi.org.mx/" target="_blank">{`Tecnológico de Estudios Superiores de Ixtapaluca`}</a>{` la carrera de Ingeniería en Sistemas Computacionales.`}<br/>
                 {`Decidí orientarme hacia el desarrollo de Software.`} <br/>
              </span>;
    case 1:
      return  <span>
                 {`Durante mis estudios realicé dos proyectos para mi instución.`} <br/>
                 {`El primero fue un sistema de control de estudiantes para el departamento de Inglés.`} <br/> {/*TODO  AGREGAR LINK DE PROYECTOS*/}
                 {`El segundo fue un módulo de expedición de certificados académicos en la Blockchain de Ethereum y se implementó en el sistema de control escolar del Tecnológico.`}<br/>
              </span>; 
    case 2:
      return  <span>
                 {`En el año 2018 comencé un proyecto llamado INNOVA TESI.`}<br/>
                 {`Es una comunidad estudiantil en donde se comparte conocimiento en torno a tecnología, se desarrollan concursos de programación, además fuimos 
                      parte de las comunidades de dos de los eventos de tecnología más grandes de México, Campus Party en su momento y
                      actualmente lo somos en Talent Land.`} <br/> 
              </span>;
    case 3:
      return  <span>
                 {`En el año 2018 realicé mis residencias profesionales en la empresa Kristal Software House.`} <br/>
                 {`Realicé una serie de customizaciones al ERP Epicor 10, así como una serie de servicios para el sistema operativo Windows.`} <br/>
                 {`Una vez que terminé mis residencias profesionales tuve la oportunidad de quedarme a trabajar 6 meses más en la empresa.`} <br/> 
              </span>;
    case 4:
    return  <span>
               {`En Marzo de 2020 comencé a trabajar en iGenter México como desarrollador Frontend en donde utilizó tecnologías como JavaScript, React.Js, GIT, GitLab, MaterialUI,
                    Axios, Postman, entre otras.`} <br/>  {/* TODO SUBIR PAPER PROYECTO */}
            </span>;  
    case 5:
      return  <span>
                 {`Despues de unos años finalicé la Ingeniería en Sistemas Computacionales mediante la opción de titulación
                      proyecto de investigación, este lleva por nombre "Expedición de Certificados Académicos Digitales con Blockchain en el Tecnológico de Estudios Superiores de Ixtapaluca.`} <br/>  {/* TODO SUBIR PAPER PROYECTO */}
              </span>;
    default:
      return 'Unknown step';
  }
}

export default function AboutMe() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const ColorlibStepIcon = (props)=> { 
    const icons = {
      1: <MenuBook className={props.icon === activeStep+1  ?  classes.colorIcon : ''}/>,
      2: <Apartment className={props.icon === activeStep+1  ?  classes.colorIcon : ''} />,
      3:<Group className={props.icon === activeStep+1  ?  classes.colorIcon : ''}/>,
      4: <Business className={props.icon === activeStep+1  ?  classes.colorIcon : ''}/>,
      5: <School className={props.icon === activeStep+1  ?  classes.colorIcon : ''}/>,
      6: <Work className={props.icon === activeStep+1  ?  classes.colorIcon : ''}/>
    };
  
    return (
      <div className={props.icon === activeStep+1 ? classes.activeBackground : classes.inactiveBackground}>
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper>
      <Typography variant="h5"className={classes.title}>Acerca de mi</Typography>
      <Stepper activeStep={activeStep} orientation="vertical" className={classes.actionsHover}>
        {steps.map((label, index) => (
          <Step key={index} className={classes.actionsHover} >
            <StepLabel StepIconComponent={ColorlibStepIcon} onClick={()=>{setActiveStep(index)}}>{label}</StepLabel>
            <StepContent className={classes.timeLine}>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {
                    activeStep !== 0 &&
                    <Button
                      onClick={handleBack}
                      className={classes.button}
                    >
                      {"Atras"}
                    </Button>
                  }
                  {
                    (activeStep !== steps.length - 1) &&
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {'Siguiente'}
                    </Button>
                  }
                  
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      </Paper>
    </div>
  );
}
