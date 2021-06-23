import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(action: any): Generator<any> {
    try {
        const response: any = yield call(api.get, `/search/${action.payload.search}`);
        const { results } = response.data;        
        if (results) {
            yield put(loadSuccess(response.data.results));
        } else {
            yield put(loadFailure());
        }
    } catch (error) {
        yield put(loadFailure());
    }
}
