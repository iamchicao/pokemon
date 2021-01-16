import React from "react";
import PokemonList from "../PokemonList";
import { GlobalStyle } from "../../styles/styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <PokemonList />
      </div>
    </>
  );
};

export default App;
