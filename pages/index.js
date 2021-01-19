import React, { useState } from "react";
import Head from "next/head";
import PokemonList from "../src/Components/PokemonList/PokemonList";
import Navbar from "../src/Components/Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="An original 151 Pokedex app"
                />
            </Head>
            <Navbar searchChange={searchChange} />
            <PokemonList searchTerm={searchTerm} />
        </>
    );
};

export default App;
