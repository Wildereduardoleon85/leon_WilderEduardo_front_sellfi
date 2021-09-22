import { Box, AppBar, Toolbar, IconButton } from '@material-ui/core'
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
                    <Box className={imageContainer}>
                        <img src="/img/icon.png" alt="wheater icon" className={imageIcon}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
