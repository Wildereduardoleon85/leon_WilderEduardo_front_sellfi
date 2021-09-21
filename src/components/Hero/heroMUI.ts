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
    },
    card: {
        width: '300px',
        height: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.5) !important'
    },
    cardContent: {
        height: '100%'
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '20px'
    },
    imageContainer: {
        width: '90px'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  });