import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textField: {
    '& label.Mui-focused': {
      color: '#8C8C8C',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8C8C8C',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8C8C8C',
      },
      '&:hover fieldset': {
        borderColor: '#8C8C8C',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8C8C8C',
      },
    },
  },
});

export default function PokemonSearch({ searchPokemon }) {
  const classes = useStyles();

  const handleInputChange = (e) => {
    const lowercaseValue = e.target.value.toLowerCase();
    searchPokemon(lowercaseValue);
  };

  return (
    <Box sx={{ maxWidth: "400px", margin: "0 auto" }}>
      <TextField
        fullWidth
        label="Search Pokemon"
        id="fullWidth"
        className={classes.textField}
        onChange={handleInputChange}
        variant="outlined"
      />
    </Box>
  );
}