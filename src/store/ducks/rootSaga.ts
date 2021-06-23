import { all, takeLatest } from "redux-saga/effects";

import { SuperheroesTypes } from './superheroes/types';
import { load } from './superheroes/sagas';


import { SuperheroTypes } from './superhero/types';
import { loadSuperhero } from './superhero/sagas';

export default function* rootSaga(): Generator<any> {
    return yield all([
        takeLatest(SuperheroesTypes.LOAD_REQUEST, load),
        takeLatest(SuperheroTypes.LOAD_HERO_REQUEST, loadSuperhero),
    ])
}