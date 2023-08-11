import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";
import PokemonCard from '../components/PokemonCard';
import PokemonSearch from '../components/PokemonSearch';
import { Container, Grid, Box } from '@mui/material';

export const Home = ({setPokemonData}) => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        var endpoints = []
        for (var i = 1; i < 81; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }

        console.log(endpoints);
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response;
    }

    const searchPokemon = (name) => {
        var filteredPokemons = []
        if (name === "") {
            getPokemon();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate("/profile")
    }

    const navigate = useNavigate()

    return (
        <div>
            <Navbar searchPokemon={searchPokemon}></Navbar>
            <PokemonSearch searchPokemon={searchPokemon}></PokemonSearch>
            <Container maxWidth="false" sx={{ marginTop: "30px", marginBottom: "30px" }}>
                <Grid container spacing={4}>
                    {pokemons.map((pokemon) => (
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}></PokemonCard>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
