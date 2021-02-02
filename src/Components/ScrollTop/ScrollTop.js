
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'; 
import GoToID from '../../Helpers/GoToID';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

const ScrollTop = props => {
    
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 400,
    });
  
    return (
      <Zoom in={trigger}>
        <div onClick={(e)=>{GoToID(e ,'back-to-top-anchor')}} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  export default ScrollTop;