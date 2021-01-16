import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard/PokemonCard";
import pokedex from "../data/pokedex";
import descriptions from "../data/descriptions";
import abilities from "../data/abilities";
import { setSearchField } from "./Actions/actions";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

const PokemonList = ({ searchField, onSearchChange }) => {
  const [pokemon, setPokemon] = useState([]);
  const [description, setDescription] = useState([]);
  const [ability, setAbility] = useState([]);

  useEffect(() => {
    const getPokemonData = () => {
      const pokemonData = pokedex;
      const pokemonDescription = descriptions;
      const pokemonAbilities = abilities.map((ability) => {
        return ability.map((ability) => ability.ability.name).join(" / ");
      });
      setPokemon(pokemonData);
      setDescription(pokemonDescription);
      setAbility(pokemonAbilities);
    };
    getPokemonData();
  }, []);

  const pokemonFiltered = pokemon.filter((pokemon) => {
    return pokemon.name.english
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });
  return (
    <div className="row">
      <Navbar searchChange={onSearchChange} />
      {pokemonFiltered.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name.english}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png?raw=true`}
          hp={pokemon.base["HP"]}
          attack={pokemon.base["Attack"]}
          defense={pokemon.base["Defense"]}
          specialAttack={pokemon.base["Sp. Attack"]}
          specialDefense={pokemon.base["Sp. Defense"]}
          speed={pokemon.base["Speed"]}
          type={pokemon.type}
          description={description[pokemon.id - 1]}
          ability={ability[pokemon.id - 1]}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
