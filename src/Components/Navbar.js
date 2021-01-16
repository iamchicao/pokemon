// eslint-disable-next-line
import React, { useState } from "react";

// const [searchTerm, setSearchTerm] = useState("");

// const handleChange = (event) => {
//   setSearchTerm(event.target.value);
// };

const Navbar = ({ searchChange }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <h1 className="navbar-brand">Pokedex</h1>
        <form className="form-inline" onSubmit="">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Pokemon"
            aria-label="search"
            onChange={searchChange}
          />
        </form>
      </nav>
    </div>
  );
};

export default Navbar;