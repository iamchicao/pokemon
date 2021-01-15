import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import SearchBox from "./SearchBox";

class PokemonDisplayList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchbardata: "",
      name: "",
      pokemonNumber: "",
      image: "",
      description: "",
      type: "",
      ability: "",
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed: "",
      url: ""
    };
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const pokemonData = await axios.get(url);
    const pokemonUrl = pokemonData.data["results"]
      .map(pokemon => pokemon.url)
      .join("");
    console.log(pokemonUrl);

    const pokemonNumber = pokemonUrl.split("/")[6];
    console.log(pokemonNumber);

    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonNumber}.png?raw=true`;
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    const pokemonSpeciesDataUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`;
    const pokemonDataResponse = await axios.get(pokemonDataUrl);
    const pokemonSpeciesDataResponse = await axios.get(pokemonSpeciesDataUrl);

    //Buscar habilidades do Pokémon
    const ability = pokemonDataResponse.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split("-")
          .map(str => str.charAt(0).toUpperCase() + str.substring(1))
          .join(" ");
      })
      .join("/");

    //Buscar tipos do Pokémon
    const type = pokemonDataResponse.data.types.map(type => {
      return type.type.name;
    });

    //Buscar a descrição do Pokémon
    let description = "";
    pokemonSpeciesDataResponse.data.flavor_text_entries.some(text => {
      if (text.language.name === "en") {
        description = text.flavor_text;
      }
      return description;
    });

    //Buscar HP (Vida), Defesa, Ataque Especial, Defesa Especial e a Velocidade
    let hp = "";
    let attack = "";
    let defense = "";
    let specialAttack = "";
    let specialDefense = "";
    let speed = "";

    pokemonDataResponse.data.stats.reverse().map(stat => {
      //Switch Case
      if (stat.stat.name === "hp") {
        hp = stat.base_stat;
      }
      if (stat.stat.name === "attack") {
        attack = stat.base_stat;
      }
      if (stat.stat.name === "defense") {
        defense = stat.base_stat;
      }
      if (stat.stat.name === "special-attack") {
        specialAttack = stat.base_stat;
      }
      if (stat.stat.name === "special-defense") {
        specialDefense = stat.base_stat;
      }
      if (stat.stat.name === "speed") {
        speed = stat.base_stat;
      }
      return "";
    });

    this.setState({
      pokemon: pokemonData.data["results"],
      pokemonNumber: pokemonNumber,
      image: image,
      description: description,
      type: type,
      ability: ability,
      hp: hp,
      attack: attack,
      defense: defense,
      specialAttack: specialAttack,
      specialDefense: specialDefense,
      speed: speed,
      url: pokemonUrl
    });
  }

  onSearchChange = event => {
    //Atualização do estado de busca para exibir o pokemon.
    //Arrow Function seguram o valor que está ligado ao local de onde foi criada.
    console.log("data: " + this.state.searchbardata);
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
              url={this.state.url}
              pokemonNumber={this.state.pokemonNumber}
              image={this.state.image}
              description={this.state.description}
              type={this.state.type}
              ability={this.state.ability}
              hp={this.state.hp}
              attack={this.state.attack}
              defense={this.state.defence}
              specialAttack={this.state.specialAttack}
              specialDefense={this.state.specialDefense}
              speed={this.state.speed}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonDisplayList;