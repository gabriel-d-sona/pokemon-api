import React from "react";

class Pokedex extends React.Component {
    render() {
        return (
            <input
                id="search-input"
                data-testid="login-search-input"
                type="text"
                name="search"
                // value={search}
                onChange={this.onInputChange}
            />
        )
    }
}

export default Pokedex;