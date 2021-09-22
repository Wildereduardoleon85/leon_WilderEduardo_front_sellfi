import { makeStyles } from '@material-ui/styles';

export const heroStyles = makeStyles({
    backdrop:{
        backgroundColor: 'blue',
        height: 'calc(100vh - 64px)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });