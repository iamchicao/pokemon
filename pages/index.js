import React, { useState } from "react";
import Head from "next/head";
import PokemonList from "../src/Components/PokemonList/PokemonList";
import { GlobalStyle, Container } from "../src/styles/global/";
import Navbar from "../src/Components/Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            {" "}
            <Head>
                <title>Pokedex</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <GlobalStyle />
            <Navbar searchChange={searchChange} />
            <Container>
                <PokemonList searchTerm={searchTerm} />
            </Container>
        </>
    );
};

export default App;
