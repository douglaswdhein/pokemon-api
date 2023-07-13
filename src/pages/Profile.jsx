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
                        <Typography fontSize={35} textTransform="uppercase" color="#8C8C8C">{name}</Typography>
                        <Box display="flex" justifyContent="space-around" alignItems="center" width="100%" m={3} marginBottom="15px" sx={{
                            flexDirection: {
                                xs: "column",
                                md: "row",
                            }
                        }}>
                            <Box component="img" src={sprites.front_default} width="30%" height="50%" />
                            <PokemonInfo pokemonData={pokemonData} />
                        </Box>
                        <Box width="100%">
                            <Divider>Abilities</Divider>
                            <Box textAlign="center" marginTop="30px" marginBottom="30px">
                                {moves.map((moveData, key) => (
                                    <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                                ))}
                            </Box>
                            <Divider>Evolutions</Divider>
                            <Box display="flex" justifyContent="space-between" marginTop="30px">
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