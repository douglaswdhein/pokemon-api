import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';

export default function PokemonSearch({ searchPokemon }) {
    return (
        <Box sx={{ marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
            <TextField className='searchTextfield' fullWidth label="Search Pokemon" id="fullWidth" onChange={(e) => searchPokemon(e.target.value)} />
        </Box>
    );
}