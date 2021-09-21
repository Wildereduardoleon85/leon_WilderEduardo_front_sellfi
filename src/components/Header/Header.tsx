import { Box, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { headerStyles } from './headerMUI'
import  SearchInput  from '../SearchInput/SearchInput'

const Header = () => {
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
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <i className="fas fa-bars"/>
                    </IconButton>
                    <Box className={imageContainer}>
                        <img src="/img/icon.png" alt="wheater icon" className={imageIcon}/>
                    </Box>
                    <SearchInput/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
