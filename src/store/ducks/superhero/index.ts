import { Reducer } from 'redux';
import { SuperheroState, SuperheroTypes } from './types';

const INITIAL_STATE: SuperheroState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<SuperheroState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SuperheroTypes.LOAD_HERO_REQUEST:
            return { ...state, loading: true };
        case SuperheroTypes.LOAD_HERO_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case SuperheroTypes.LOAD_HERO_FAILURE:
            return { ...state, loading: false, error: true, data: null };
        case SuperheroTypes.CLEAR_HERO:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default reducer;
