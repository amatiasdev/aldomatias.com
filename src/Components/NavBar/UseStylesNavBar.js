import { makeStyles } from '@material-ui/core/styles';

const UseStylesNavBar = makeStyles( theme =>({
    root:{
        flexGrow: 1,
        backgroundColor:'#333',
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1,
    },
}));

export default UseStylesNavBar;
