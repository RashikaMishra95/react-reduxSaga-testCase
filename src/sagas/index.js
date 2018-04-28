import {fork} from 'redux-saga/effects';
import watchSaga from './watcher';
export default function* startFork() {
    debugger
    console.log("Index Saga ===>");
    yield fork(watchSaga);
}