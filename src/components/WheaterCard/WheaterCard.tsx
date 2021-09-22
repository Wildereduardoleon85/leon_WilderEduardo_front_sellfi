import { Card, CardContent, Box, TextField, Typography } from '@material-ui/core'
import { WheaterInfo } from '../../interfaces/interfaces'
import { wheaterCardStyles } from './wheaterCardMUI'

interface props {
    wheaterInfo: WheaterInfo
}

const WheaterCard = ({wheaterInfo}: props) => {
    const classes = wheaterCardStyles()
    const { card, cardContent, inputGroup, imageContainer, container } = classes
    const { ciudad, estado, loading, temperatura, humedad } = wheaterInfo

    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                <Box className={inputGroup}>
                    <i className="fas fa-search" style={{marginRight: '10px'}}/>
                    <TextField id="input-with-sx" label="Buscar por Ciudad" variant="standard" />
                </Box>
                <Typography variant="h5">   
                    {ciudad}
                </Typography>
                <Typography mt={1} variant="body2">
                    {`Lunes, 13:00, ${estado}`}
                </Typography>
                <Box mt={1} className={container}>
                    <Typography variant="h2">
                        {temperatura + '°'}
                    </Typography>
                    <Box className={imageContainer}>
                        <img src="/img/day.svg" alt="" style={{width: '100%'}}/>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default WheaterCard
