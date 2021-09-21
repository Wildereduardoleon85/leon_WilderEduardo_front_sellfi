import { 
    Box
} from '@material-ui/core'
import WheaterInfo from '../WheaterInfo/WheaterInfo'
import { heroStyles } from './heroMUI'
import { useFetchData } from '../../hooks/useFetchData'


const Hero: React.FC = () => {
    const classes = heroStyles()
    const { backdrop } = classes

    return (
        <Box className={backdrop}>
            <WheaterInfo/>
        </Box>
    )
}

export default Hero
