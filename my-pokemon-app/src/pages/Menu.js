import React from "react";
import Header from "../componentes/Header";
// import { Navigate } from "react-router-dom";

class Menu extends React.Component {
    statee = {
        btnPacks: false,
        btnPokedex: false,
    };

btnPacks = () => {
    this.setState({btnPacks: true});
};

btnPokedex = () => {
    this.setState({btnPokedex: true});
};
    render() {
        // const { btnPacks, btnPokedex } = this.state;
        // if (btnPacks) {
        //     return <Navigate to="/packs" />;
        // }
        // if (btnPokedex) {
        //     return <Navigate to="/pokedex" />;
        // }
        return (
            <><div>
                <Header />
            </div>
            <div>
                <button
                    id="btnPacks"
                    data-testid="packs-btn"
                    onClick={this.btn}
                >
                    Packs
                </button>
                <button
                    id="btnPokedex"
                    data-testid="pokedex-btn"
                    onClick={this.btn}
                >
                    Pokedex
                </button>
                </div></>
        )
    }
}

export default Menu;