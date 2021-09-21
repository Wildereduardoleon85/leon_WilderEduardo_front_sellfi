import { Card, CardContent, Box, TextField, Typography } from '@material-ui/core'
import { wheaterInfoStyles } from './wheaterInfoMUI'

const WheaterInfo: React.FC = () => {
    const classes = wheaterInfoStyles()
    const { card, cardContent, inputGroup, imageContainer, container } = classes
    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                <Box className={inputGroup}>
                    <i className="fas fa-search" style={{marginRight: '10px'}}/>
                    <TextField id="input-with-sx" label="Buscar por Ciudad" variant="standard" />
                </Box>
                <Typography variant="h5">   
                    Santiago
                </Typography>
                <Typography mt={1} variant="body2">
                    Lunes, 13:00, Despejado
                </Typography>
                <Box mt={1} className={container}>
                    <Typography variant="h2">
                        26°C
                    </Typography>
                    <Box className={imageContainer}>
                        <img src="/img/day.svg" alt="" style={{width: '100%'}}/>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default WheaterInfo
