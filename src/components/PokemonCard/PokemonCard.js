import React, { Component } from "react";
import "./PokemonCard.css";
import axios from "axios";

//https://bulbapedia.bulbagarden.net/wiki/Type
const colors = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "##B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7538FB",
  dark: "#70584",
  fairy: "#EE99AC"
};

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonNumber: "",
      image: "",
      type: [],
      description: ""
    };
  }

  async componentDidMount() {
    const { name, url } = this.props;
    const pokemonNumber = url.replace(/^\D+/g, "").split("/")[2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonNumber}.png?raw=true`;
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    const pokemonSpeciesDataUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`;
    const pokemonDataResponse = await axios.get(pokemonDataUrl);
    const pokemonSpeciesDataResponse = await axios.get(pokemonSpeciesDataUrl);
    console.log(url);

    //Busca as habilidades do Pokémon
    const ability = pokemonDataResponse.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split("-")
          .map(str => str.charAt(0).toUpperCase() + str.substring(1))
          .join(" ");
      })
      .join("/");

    //Busca o tipo do Pokémon

    const type = pokemonDataResponse.data.types.map(type => {
      return type.type.name;
    });

    //Busca pela descrição do Pokémon
    let description = "";
    pokemonSpeciesDataResponse.data.flavor_text_entries.some(text => {
      if (text.language.name === "en") {
        // console.log(text.flavor_text);
        description = text.flavor_text;
      }
      return description;
    });

    //Busca por HP(Vida), Ataque, Defesa, Ataque Especial, Defesa Especial e a Velocidade
    let hp = "";
    let attack = "";
    let deffense = "";
    let specialAttack = "";
    let specialDeffense = "";
    let speed = "";

    pokemonDataResponse.data.stats.reverse().map(stat => {
      //Switch Case
      if (stat.stat.name === "hp") {
        hp = stat.base_stat;
      }
      if (stat.stat.name === "attack") {
        attack = stat.base_stat;
      }
      if (stat.stat.name === "deffense") {
        deffense = stat.base_stat;
      }
      if (stat.stat.name === "specialAttack") {
        specialAttack = stat.base_stat;
      }
      if (stat.stat.name === "specialDeffense") {
        specialDeffense = stat.base_stat;
      }
      if (stat.stat.name === "speed") {
        speed = stat.base_stat;
      }
      return "";
    });

    this.setState({
      name: name,
      pokemonNumber: pokemonNumber,
      image: image,
      description: description,
      type: type,
      ability: ability,
      ho: hp,
      attack: attack,
      deffense: deffense,
      specialAttack: specialAttack,
      specialDeffense: specialDeffense,
      speed: speed
    });
  }
  render() {
    const {
      name,
      image,
      pokemonNumber,
      description,
      type,
      ability,
      hp,
      attack,
      deffense,
      specialAttack,
      specialDeffense,
      speed
    } = this.state;
    const upperCaseFirstChar = string =>
      string.charAt(0).toUpperCase() + string.substring(1);
    return (
      <div className="card-container col-md-3 col-sm-6 mb-3">
        <div className="card bg-dark text-white">
          <div className="text-nowrap p-1">
            <h4 className="pokemon-name">{upperCaseFirstChar(name)}</h4>
            <p>#{pokemonNumber}</p>
            {type
              .map(type => (
                <span
                  style={{
                    backgroundColor: `${colors[type]}`
                  }}
                  className="p-1 m-1 badge"
                  key={type}
                >
                  {upperCaseFirstChar(type)}
                </span>
              ))
              .reverse()}
          </div>
          <div className="card-body">
            <img src={image} alt={`pokemon: ${name}`} />
            <div className="card-title text-left">
            <h5 className="pokemon-stats">Stats</h5>
              <h6 className="pokemon-stat-title">
                Ability: <span>{ability}</span>
              </h6>
              <p className="pokemon-stat-title">
                HP: <span>{hp}</span>
              </p>
              <p className="pokemon-stat-title">
                Attack: <span>{attack}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Defense: <span>{deffense}</span>
              </p>
              <p className="pokemon-stat-title">
                Special Attack: <span>{specialAttack}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Special Defense: <span>{specialDeffense}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Speed: <span>{speed}</span>
              </p>
              <p className="pokemon-stat-title">Description:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;