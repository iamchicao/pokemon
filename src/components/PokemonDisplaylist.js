import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import SearchBox from "./SearchBox";

class PokemonDisplaylist extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchbardata: ""
    };
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const pokemonData = await axios.get(url);

    this.setState({
      pokemon: pokemonData.data["results"]
    });
  }
  onSearchChange = event => {
    //Atualização do estado de busca para exibir o pokemon.
    //Arrow Function seguram o valor que está ligado ao local de onde foi criada.
    this.setState({ searchbardata: event.target.value });
  };
  render() {

    //Feat: Campo de pesquisa, permitindo buscar um pokémon
    const pokemonFiltered = this.state.pokemon.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchbardata.toLowerCase());
    });
    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Pokedex</h1>
        {<SearchBox searchChange={this.onSearchChange} />}
        <div className="row ">
          {pokemonFiltered.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonDisplaylist;