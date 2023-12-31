import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from '../../utils';

export default function PokemonInfo({ pokemonData }) {
    const { height, weight, types } = pokemonData;

    const cellStyleTittle = {      
        textTransform: 'uppercase', 
        color: '#8C8C8C',         
    };

    const cellStyle = {
        textAlign: 'center',      
        textTransform: 'uppercase', 
        color: '#8C8C8C',         
    };

    return (
        <TableContainer component={Paper} sx={{ height: "fit-content", maxWidth: "250px" }}>
            <Table aria-label="a dense table"> 
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell style={cellStyleTittle}>{"Type"}</TableCell>
                        <TableCell style={cellStyle}>{typeHandler(types)}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell style={cellStyleTittle}>{"Height"}</TableCell>
                        <TableCell style={cellStyle}>{height}CM</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell style={cellStyleTittle}>{"Weight"}</TableCell>
                        <TableCell style={cellStyle}>{weight}G</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
