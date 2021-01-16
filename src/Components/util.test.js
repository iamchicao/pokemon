import { filterOutPokemon } from "./utils";
import pokedex from '../data/pokedex';

describe("Filtering of pokemon", () => {
    const pokemon = pokedex;
    it("Should return an array of 3 Pokemon - Staryu, Starmine and Omastar", () => {
        const term = "star";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.length).toBe(3);
    });

    it("Should return an array of 1 Pokemon when search term matches pokemon name - Charmander", () => {
        const term = "Charmander";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.lenght).toBe(1);
    });

    it("Should not return any Pokemon when search term is an invalid name", () => {
        const term = "I'm not a real search term";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.lenght).toBe(0);
    });
});