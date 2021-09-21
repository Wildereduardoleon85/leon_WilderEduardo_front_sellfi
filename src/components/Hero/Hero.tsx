import { Box } from '@material-ui/core'
import { heroStyles } from './heroMUI'

const Hero = () => {
    const classes = heroStyles()
    const { backdrop } = classes

    return (
        <Box className={backdrop}>
            Hero
        </Box>
    )
}

export default Hero
