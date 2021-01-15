import { CHANGE_SHEARCHFIELD } from "../Constants";

const intialState = {
  searchField: "",
};

export const searchPokemon = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SHEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
