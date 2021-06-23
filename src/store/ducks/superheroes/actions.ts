import { action } from 'typesafe-actions';
import { Superheroes, SuperheroesTypes } from './types';

export const loadRequest = (search: string) => action(SuperheroesTypes.LOAD_REQUEST, { search });

export const loadSuccess = (data: Superheroes[]) => action(SuperheroesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SuperheroesTypes.LOAD_FAILURE);