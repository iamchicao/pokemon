import React from 'react';

const Navbar = () => {
    return(
        <div className="navbar navbar-dark bd-dark fixed-top">
            <h1 className="navbar-brand">Pokedex</h1>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Pokemon"
                    aria-label="search"
                />
            </form>
        </div>
    );
};

export default Navbar;