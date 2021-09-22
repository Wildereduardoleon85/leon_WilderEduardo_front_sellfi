import { 
    Card, 
    CardContent, 
    Box, 
    FormGroup, 
    Typography, 
    FormControlLabel, 
    Switch 
} from '@material-ui/core'
import { WheaterInfo } from '../../interfaces/interfaces'
import { wheaterCardStyles } from './wheaterCardMUI'
import CustomSwitch from '../CustomSwitch/CustomSwitch'

interface props {
    wheaterInfo: WheaterInfo
}

const WheaterCard = ({wheaterInfo}: props) => {
    const classes = wheaterCardStyles()
    const { card, cardContent, imageContainer, container, imageContainer2 } = classes
    const { ciudad, estado, loading, temperatura, humedad } = wheaterInfo

    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                <Typography variant="h5" align='center'>   
                    {ciudad}
                </Typography>
                <Typography mt={1} variant="body2" align='center'>
                    {`Lunes, 13:00, ${estado}`}
                </Typography>
                <Box mt={1} className={container}>
                    <Typography variant="h2" align='center'>
                        {temperatura + '°'}
                    </Typography>
                    <Box className={imageContainer}>
                        <img src="/img/day.svg" alt="" style={{width: '100%'}}/>
                    </Box>
                </Box>
                <Box mt={1} className={container}>
                    <FormGroup>
                        <FormControlLabel 
                            control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
                            label="Custom Switch" 
                        />
                    </FormGroup>
                </Box>
                <Box mt={1} className={container}>
                    <Box className={imageContainer2}>
                        <img src="/img/humidity.png" alt="" style={{width: '100%'}}/>
                    </Box>
                    <Typography variant='h3' align='center'>
                        {humedad}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default WheaterCard
