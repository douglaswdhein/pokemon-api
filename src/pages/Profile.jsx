import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Box, Container, Divider, Paper, Typography, Chip } from '@mui/material';
import PokemonInfo from '../components/PokemonInfo';
import { useNavigate } from 'react-router-dom';

export const Profile = ({ pokemonData }) => {
    const { name, sprites, moves } = pokemonData || {};

    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
            navigate("/");
        }
    }, []);

    if (!pokemonData) {
        return null;
    }

    return (
        <>
            <Navbar hideSearch />
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
                        <Typography variant="h4">{name}</Typography>
                        <Box display="flex" alignItems="center" width="100%" m={3} marginBottom="15px" sx={{
                            flexDirection: {
                                xs: "column",
                                md: "row",
                            }
                        }}>
                            <Box component="img" src={sprites.front_default} width="50%" height="70%" />
                            <PokemonInfo pokemonData={pokemonData} />
                        </Box>
                        <Box width="100%">
                            <Divider>Abilities</Divider>
                            <Box textAlign="center" marginTop="15px">
                                {moves.map((moveData, key) => (
                                    <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                                ))}
                            </Box>
                            <Divider>Evolutions</Divider>
                            <Box display="flex" justifyContent="space-between">
                                <Box component="img" src={sprites.front_female} width="25%" height="25%" />
                                <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
                                <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}