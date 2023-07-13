import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeHandler } from '../../utils';
import './index.css';

export default function PokemonCard( {name, image, types } ) {


    return (
        <Card sx={{ maxWidth: 350, background: '#F2F2F2' }}>
            <CardActionArea>
                <CardContent>
                    <Typography className='cardTittle' gutterBottom variant="h4" display="flex" flexDirection="column" alignItems="center" component="div">
                        {name}
                    </Typography>
                    <Typography className='cardTypeTittle' gutterBottom variant="h6" display="flex" flexDirection="column" alignItems="center" component="div">
                        {typeHandler(types)}
                    </Typography>
                    <CardMedia component="img" image={image} alt="green iguana"/>
                    {/*<Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>*/}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}