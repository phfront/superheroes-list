import { combineReducers } from 'redux';

import superheroes from './superheroes';
import superhero from './superhero';

export default combineReducers({
    superheroes,
    superhero
})
