import React from "react";
import PokemonSearch from "../componentes/PokemonSearch";
import Header from '../componentes/Header';

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Pokedex</h1>
                <PokemonSearch />
            </div>
        )
    }
}

export default Pokedex;