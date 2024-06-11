import React from "react";
// import CardPokemon from "./CardPokemon";
import { useState } from "react";
import api from "../functions/fetchFunctions";

function PokemonSearch() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState({});

    async function handleSearch() {
            const response = await api.get(`${pokemonName}`)
            console.log(response.data);
            setPokemonData(response.data)
            setPokemonName("");

    }

        return (
            <div>
                <label htmlFor="search">Search</label>
                <input
                    id="search-input"
                    data-testid="search-input"
                    type="text"
                    name="search"
                    value={ pokemonName }
                    onChange={ (e) => setPokemonName(e.target.value) }
                    placeholder="Enter Pokémon name or number"
                />
                <button
                    id="btnSearch"
                    data-testid="search-btn"
                    onClick={ handleSearch }
                > 
                    Search
                </button>
                <h2>{ pokemonData.name }</h2>
                <img src={ pokemonData.sprites.front_default } alt={ pokemonData.name } />
                <h3>{ pokemonData.weight }</h3>
            </div>
        )
    }

export default PokemonSearch;