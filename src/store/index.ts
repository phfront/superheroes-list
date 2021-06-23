import { createStore, applyMiddleware, Store } from 'redux';
import { SuperheroesState } from './ducks/superheroes/types'
import { SuperheroState } from './ducks/superhero/types'
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    superheroes: SuperheroesState,
    superhero: SuperheroState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
