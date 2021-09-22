import { 
    Card, 
    CardContent, 
    Box, 
    FormGroup, 
    Typography, 
    FormControlLabel 
} from '@material-ui/core'
import { WheaterInfo } from '../../interfaces/interfaces'
import { wheaterCardStyles } from './wheaterCardMUI'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
import { useState } from 'react'
import { getIcons } from '../../helpers/getWheaterIcons'
import { getDayString, getTime } from '../../helpers/getDates'
import Spinner from '../Spinner'

interface props {
    wheaterInfo: WheaterInfo,
    date: Date
}

const WheaterCard = ({wheaterInfo, date}: props) => {
    const classes = wheaterCardStyles()
    const { card, cardContent, imageContainer, container, imageContainer2 } = classes
    const { ciudad, estado, loading, temperatura, humedad } = wheaterInfo

    const [tempSwitch, setTempSwitch] = useState<boolean>(true)

    const farenheit = ((temperatura * 1.8) + 32).toFixed(1)
    
    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                {loading ? (
                     <Spinner/>
                ) : (
                    <>
                        <Typography variant="h5" align='center'>   
                            {ciudad}
                        </Typography>
                        <Typography mt={1} variant="body2" align='center'>
                            {`${getDayString(date)}, ${getTime(date)} ${estado}`}
                        </Typography>
                        
                        <Typography mt={1} variant="h2" align='center'>
                            {tempSwitch ? temperatura+' °C' : farenheit+' °F'}
                        </Typography>
                        <Box className={imageContainer}>
                            <img src={getIcons(estado)} alt={estado} style={{width: '100%'}}/>
                        </Box>
                        
                        <Box className={container}>
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
                                <img src="/img/humidity.png" alt="humidity" style={{width: '100%'}}/>
                            </Box>
                            <Typography variant='h3' align='center'>
                                {humedad}
                            </Typography>
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export default WheaterCard
