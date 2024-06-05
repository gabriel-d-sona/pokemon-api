import PropTypes from 'prop-types';
import React from "react";
// import { fetchPokemon } from "../functions/fetchFunctions";

class CardPokemon extends React.Component {
    render() {
        const { front_default, name, weight } = this.props;
        return (
            <div>
                <img src={ front_default } alt={ name } />
                <h1>{ name }</h1>
                <h2>Type:</h2>
                <h2>Weight:</h2>
                <h3>{ weight }</h3>
            </div>
        );
    }
}

CardPokemon.propTypes = {
    front_default: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
};

export default CardPokemon;