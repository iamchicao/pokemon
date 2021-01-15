import React, { Component } from "react";
import PokemonDisplayList from "./PokemonDisplayList";

class PokemonContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <PokemonDisplayList />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonContainer;
