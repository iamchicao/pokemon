import React, { Component } from "react";
import PokemonList from "./PokemonList";

class PokemonContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <PokemonList />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonContainer;
