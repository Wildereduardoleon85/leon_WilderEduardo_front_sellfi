import { Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { headerStyles } from './headerMUI'

interface Props {
    toggleDrawer: any
}

const Header: React.FC<Props> = ({toggleDrawer}) => {
    const classes = headerStyles()
    const {grow, imageContainer, imageIcon} = classes

    return (
        <Box className={grow}>
            <AppBar position="static">
                <Toolbar>
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
                    <Typography variant='h5'>
                        My Wheater App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
