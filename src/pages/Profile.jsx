import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Container, Paper, Typography } from '@mui/material';
import PokemonInfo from '../components/PokemonInfo';

export const Profile = ({ pokemonData }) => {
    const { name, sprites } = pokemonData;
    return (
        <>
            <Navbar hideSearch />
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
                        <Typography variant="h4">{name}</Typography>
                        <Box display="flex" width="100%" m={3}>
                            <Box component="img" src={sprites.front_default} width="50%" height="70%"/>
                            <PokemonInfo pokemonData={pokemonData}/>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}