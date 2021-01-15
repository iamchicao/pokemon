import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PokemonContainer from "./Components/PokemonContainer";
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <PokemonContainer />
        </div>
      </div>
    );
  }
}

export default App;
