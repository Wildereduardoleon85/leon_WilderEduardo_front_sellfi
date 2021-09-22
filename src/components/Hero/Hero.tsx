import { 
    Box
} from '@material-ui/core'
import WheaterCard from '../WheaterCard/WheaterCard'
import { heroStyles } from './heroMUI'
import { WheaterInfo } from '../../interfaces/interfaces'

interface props {
    wheaterInfo: WheaterInfo
}

const Hero = ({wheaterInfo}: props) => {
    const classes = heroStyles()
    const { backdrop } = classes

    return (
        <Box className={backdrop}>
            <WheaterCard wheaterInfo={wheaterInfo} />
        </Box>
    )
}

export default Hero
