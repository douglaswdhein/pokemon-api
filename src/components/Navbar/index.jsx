import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate ()
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
            <AppBar position="static" sx={{ backgroundColor: '#ededed', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Toolbar>
                    <Box display="flex" justifyContent="center" width="100%">
                        <Box component="img" src="/assets/logotipo.png" height="4em"  sx={{cursor: "pointer"}} onClick={() => navigate("/")}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}