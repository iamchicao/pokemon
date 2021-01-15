import { CHANGE_SHEARCHFIELD } from "../Constants";

export const setSearchField = (text) => ({
  type: CHANGE_SHEARCHFIELD,
  payload: text,
});
