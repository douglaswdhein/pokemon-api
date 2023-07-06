import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from "../components/Navbar";
import PokemonCard from '../components/PokemonCard';
import { Container, Grid } from '@mui/material';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        var endpoints = []
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }

        console.log(endpoints);
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response;
    }

    const searchPokemon = (name) => {
        var filteredPokemons = []
        if(name===""){
            getPokemon();
        }
        for (var i in pokemons) {
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    return (
        <div>
            <Navbar searchPokemon={searchPokemon}></Navbar>
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon) => (
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}></PokemonCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}