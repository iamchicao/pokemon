import React from "react";
import PokemonList from "../PokemonList";
import { GlobalStyle } from "../../styles/styles";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
