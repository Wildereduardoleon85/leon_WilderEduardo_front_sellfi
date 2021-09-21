import { 
    Box, 
    Card, 
    CardContent, 
    TextField, 
    Typography 
} from '@material-ui/core'
import { heroStyles } from './heroMUI'


const Hero = () => {
    const classes = heroStyles()
    const { backdrop, card, cardContent, inputGroup, imageContainer, container } = classes

    return (
        <Box className={backdrop}>
            <Card className={card} id='card'>
                <CardContent className={cardContent}>
                    <Box className={inputGroup}>
                        <i className="fas fa-search" style={{marginRight: '10px'}}/>
                        <TextField id="input-with-sx" label="With sx" variant="standard" />
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
        </Box>
    )
}

export default Hero
