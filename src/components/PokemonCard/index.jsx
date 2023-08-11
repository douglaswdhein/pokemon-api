import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeHandler } from '../../utils';

const PokeCard = styled(Card)`
    background-color: white;
    border-radius: 5px;
`;

const PokeTitle = styled(Typography)`
    text-transform: uppercase;
    color: #8C8C8C;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 23px;
`;

const PokeType = styled(Typography)`
    text-transform: uppercase;
    color: #8C8C8C;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
`;

export default function PokemonCard( {name, image, types } ) {

    return (
        <PokeCard sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardContent>
                    <PokeTitle component="div">
                        {name}
                    </PokeTitle>
                    <PokeType component="div">
                        {typeHandler(types)}
                    </PokeType>
                    <CardMedia component="img" image={image} alt="green iguana"/>
                </CardContent>
            </CardActionArea>
        </PokeCard>
    );
}