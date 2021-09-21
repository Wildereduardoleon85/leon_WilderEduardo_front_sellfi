import { makeStyles } from '@material-ui/styles';

export const heroStyles = makeStyles({
    backdrop:{
        backgroundColor: 'blue',
        height: 'calc(100vh - 64px)',
        backgroundImage: `url("/img/sky.jpg")`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });