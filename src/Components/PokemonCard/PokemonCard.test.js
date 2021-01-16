import React from 'react';
import { render }  from "@testing-library/react";
import PokemonCard from  './PokemonCard';
import { iteratee } from 'lodash';

const props = {
    name: "Mew",
    id: 151,
    image: "",
    hp: 100,
    attack: 100,
    deffense: 100,
    specialAttack: 100,
    specialDefense: 100,
    type: ["Physic"],
    description:
        "Mew is said to prossess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    ability: "Synchronize",    
};

describe("<PokemonCard/>", () => {
    it("Should a render a PokemonCard", () => {
        const { getByTestId } = render(<PokemonCard {...props} />);
        const = getByTestId("pokemon-card");
        expect(card).toBeTruthy();
    });
});