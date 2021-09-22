import { makeStyles } from '@material-ui/styles';

export const wheaterCardStyles = makeStyles({
    card: {
        width: '300px',
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
        justifyContent: 'center'
    }
  });