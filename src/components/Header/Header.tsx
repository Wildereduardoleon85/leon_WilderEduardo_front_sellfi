import { Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { headerStyles } from './headerMUI'
import { getBackground, getDayString, getTime } from '../../helpers/getDates'
import { WheaterInfo } from '../../interfaces/interfaces'

interface Props {
    toggleDrawer: any,
    date: Date,
    wheaterInfo: WheaterInfo,
}

const Header: React.FC<Props> = ({toggleDrawer, date, wheaterInfo}) => {
    const classes = headerStyles()
    const {grow, imageContainer, imageIcon, mobile} = classes
    const { estado } = wheaterInfo

    return (
        <Box className={grow}>
            <AppBar position="static" >
                <Toolbar 
                    style={{backgroundColor: getBackground(date).color}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <i className="fas fa-bars"/>
                    </IconButton>
                    <Box mr={2} className={imageContainer}>
                        <img src="/img/icon.png" alt="wheater icon" className={imageIcon}/>
                    </Box>
                    <Typography className={mobile} variant='h5' sx={{ flexGrow: 1 }}>
                        My Wheater App
                    </Typography>
                    <Typography mt={1} variant="body2" className={mobile}>
                        {`${getDayString(date)}, ${getTime(date)} ${estado}`}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
