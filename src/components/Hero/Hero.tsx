import { 
    Box
} from '@material-ui/core'
import WheaterCard from '../WheaterCard/WheaterCard'
import { heroStyles } from './heroMUI'
import { WheaterInfo } from '../../interfaces/interfaces'
import { getBackground } from '../../helpers/getDates'

interface props {
    wheaterInfo: WheaterInfo,
    date: Date
}

const Hero = ({wheaterInfo, date}: props) => {
    const classes = heroStyles()
    const { backdrop } = classes

    console.log(getBackground(date).bg)

    return (
        <Box className={backdrop} style={{backgroundImage: `url(${getBackground(date).bg})`}}>
            <WheaterCard wheaterInfo={wheaterInfo} date={date}/>
        </Box>
    )
}

export default Hero
