import { Reducer } from "redux";
import { SuperheroesState, SuperheroesTypes } from "./types";

const INITIAL_STATE: SuperheroesState = {
  data: [],
  search: "",
  loading: false,
  error: false,
  searchDone: false,
};

const reducer: Reducer<SuperheroesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SuperheroesTypes.LOAD_REQUEST:
      return { ...state, loading: true, search: action.payload.search };
    case SuperheroesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        searchDone: true,
      };
    case SuperheroesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
        searchDone: true,
      };
    default:
      return state;
  }
};

export default reducer;
