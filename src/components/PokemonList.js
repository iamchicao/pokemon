import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchbardata: "",
    };
  }

  async componentDidMount() {
    //Múltiplas chamadas via API, Use Promise.all([promisse, promisse2, promisse 3])

    const urls = [
      "https://pokeapi.co/api/v2/pokemon/?limit=28",
      "https://pokeapi.co/api/v2/pokemon-species/",
    ];
    const pokemonData = await axios.get(urls[0]);
    const pokemonSpecies = await axios.get(urls[1]);

    this.setState({
      pokemon: pokemonData.data["results"],
      description: pokemonSpecies.data["results"],
      // Como posso obter um mapa sobre o valor
      // para descrição e alimentar os dados com propriedade para meu componente Pokemon?
    });
  }
  onSearchChange = (event) => {
    //Atualização do estado de busca para exibir o pokemon
    this.setState({ searchbardata: event.target.value });
  };
  render() {
    //Feat: Campo de pesquisa, permitindo buscar um pokémon
    // const pokemonFiltered = this.state.pokemon.filter(pokemon => {
    //   return pokemon.name
    //     .toLowerCase()
    //     .includes(this.state.searchbardata.toLowerCase());
    // });
    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="row">
          {/*Feature: searchbox */}
          {/* <SearchBox searchChange={this.onSearchChange} /> */}
          {/*Add pokemon={pokemonFiltered back into PokemonList}*/}
          {this.state.pokemon.map((pokemon) => (
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
export default PokemonList;
