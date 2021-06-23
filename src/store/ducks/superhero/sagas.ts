import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadHeroSuccess, loadHeroFailure } from './actions';

export function* loadSuperhero(action: any): Generator<any> {
    try {
        const response: any = yield call(api.get, `/${action.payload.id}`);
        const { data } = response;
        if (data) {
            yield put(loadHeroSuccess(data));
        } else {
            yield put(loadHeroFailure());
        }
    } catch (error) {
        yield put(loadHeroFailure());
    }
}
