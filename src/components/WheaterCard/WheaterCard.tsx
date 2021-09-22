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
import { useState } from 'react'

interface props {
    wheaterInfo: WheaterInfo
}

const WheaterCard = ({wheaterInfo}: props) => {
    const classes = wheaterCardStyles()
    const { card, cardContent, imageContainer, container, imageContainer2 } = classes
    const { ciudad, estado, loading, temperatura, humedad } = wheaterInfo

    const [tempSwitch, setTempSwitch] = useState<boolean>(true)

    const farenheit = ((temperatura * 1.8) + 32).toFixed(1)
    
    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                <Typography variant="h5" align='center'>   
                    {ciudad}
                </Typography>
                <Typography mt={1} variant="body2" align='center'>
                    {`Lunes, 13:00, ${estado}`}
                </Typography>
                
                <Typography mt={1} variant="h2" align='center'>
                    {tempSwitch ? temperatura+' °C' : farenheit+' °F'}
                </Typography>
                <Box className={imageContainer}>
                    <img src="/img/cloudy.svg" alt="" style={{width: '100%'}}/>
                </Box>
                
                <Box mt={1} className={container}>
                    <FormGroup>
                        <FormControlLabel 
                            control={<CustomSwitch 
                                        sx={{ m: 1 }} 
                                        checked={tempSwitch} 
                                        onChange={() =>setTempSwitch(!tempSwitch)}
                                        />}
                            label={tempSwitch ? 'Cambiar a Farenheit' : 'Cambiar a Celsius'}
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
