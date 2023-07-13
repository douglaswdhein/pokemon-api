import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PokemonSearch({ searchPokemon }) {
    return (
        <Box sx={{ maxWidth: "400px", margin: "0 auto" }}>
            <TextField fullWidth label="Search Pokemon" id="fullWidth" onChange={(e) => searchPokemon(e.target.value)} />
        </Box>
    );
}