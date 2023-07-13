import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate ()
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
            <AppBar position="static" sx={{ backgroundColor: '#D9D9D9', height: '100px' }}>
                <Toolbar>
                    <Box display="flex" justifyContent="center" width="100%">
                        <Box component="img" src="/assets/logotipo.png" height="5em" marginTop="5px" sx={{cursor: "pointer"}} onClick={() => navigate("/")}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}