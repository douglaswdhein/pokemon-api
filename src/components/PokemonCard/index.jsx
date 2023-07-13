import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeHandler } from '../../utils';

export default function PokemonCard( {name, image, types } ) {


    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardContent>
                    <Typography className='cardTittle' textTransform="uppercase" color="#8C8C8C" fontSize={20} display="flex" flexDirection="column" alignItems="center" component="div">
                        {name}
                    </Typography>
                    <Typography className='cardTypeTittle' textTransform="uppercase" color="#8C8C8C" fontSize={15} display="flex" flexDirection="column" alignItems="center" component="div">
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