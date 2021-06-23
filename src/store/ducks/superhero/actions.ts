import { action } from 'typesafe-actions';
import { Superhero, SuperheroTypes } from './types';

export const loadHeroRequest = (id: string) => action(SuperheroTypes.LOAD_HERO_REQUEST, { id });

export const loadHeroSuccess = (data: Superhero[]) => action(SuperheroTypes.LOAD_HERO_SUCCESS, { data });

export const loadHeroFailure = () => action(SuperheroTypes.LOAD_HERO_FAILURE);

export const clearHero = () => action(SuperheroTypes.CLEAR_HERO);